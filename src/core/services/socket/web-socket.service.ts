import mitt from "mitt";

type Events = {
  message: any;
  error: Event;
  open: Event;
  close: Event;
};

class WebSocketService {
  private socket: WebSocket | null = null;
  private readonly url: string;
  private reconnectInterval = 5000;
  private reconnectTimer: any = null;
  private emitter = mitt<Events>();

  constructor(url: string) {
    this.url = url;
  }

  connect(token?: string) {
    const fullUrl = token ? `${this.url}?token=${token}` : this.url;
    this.socket = new WebSocket(fullUrl);

    this.socket.onopen = (event) => {
      console.log("WebSocket connected");
      this.emitter.emit("open", event);
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
    };

    this.socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        this.emitter.emit("message", data);
      } catch (err) {
        console.error(" Error parsing message", err);
      }
    };

    this.socket.onerror = (event) => {
      console.error("WebSocket error", event);
      this.emitter.emit("error", event);
    };

    this.socket.onclose = (event) => {
      console.warn("WebSocket closed", event);
      this.emitter.emit("close", event);
      this.reconnect();
    };
  }

  private reconnect() {
    if (this.reconnectTimer) return;
    console.log(`Reconnecting in ${this.reconnectInterval / 1000}s...`);
    this.reconnectTimer = setTimeout(() => {
      this.connect();
    }, this.reconnectInterval);
  }

  on<T extends keyof Events>(event: T, handler: (arg: Events[T]) => void) {
    this.emitter.on(event, handler);
  }

  off<T extends keyof Events>(event: T, handler: (arg: Events[T]) => void) {
    this.emitter.off(event, handler);
  }

  send(data: any) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    } else {
      console.error("WebSocket not open, message not sent");
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }
}

export default WebSocketService;
