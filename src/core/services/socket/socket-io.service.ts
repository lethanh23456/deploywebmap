import { io, Socket } from "socket.io-client";
import mitt from "mitt";

type Events = {
  connect: string;
  disconnect: string;
  error: any;
  message: any;
};

class SocketIOService {
  private socket: Socket | null = null;
  private readonly url: string;
  private emitter = mitt<Events>();

  constructor(url: string) {
    this.url = url;
  }

  connect(token?: string) {
    this.socket = io(this.url, {
      transports: ["websocket"],
      auth: {
        token: token || "",
      },
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 2000,
    });

    this.socket.on("connect", () => {
      console.log("Socket.IO connected:", this.socket?.id);
      this.emitter.emit("connect", this.socket?.id || "");
    });

    this.socket.on("disconnect", (reason) => {
      console.warn("Socket.IO disconnected:", reason);
      this.emitter.emit("disconnect", reason);
    });

    this.socket.on("connect_error", (err) => {
      console.error("Socket.IO error:", err);
      this.emitter.emit("error", err);
    });

    this.socket.on("message", (data) => {
      this.emitter.emit("message", data);
    });
  }

  emit(event: string, data?: any) {
    this.socket?.emit(event, data);
  }

  on<T extends keyof Events>(event: T, handler: (arg: Events[T]) => void) {
    this.emitter.on(event, handler);
  }

  off<T extends keyof Events>(event: T, handler: (arg: Events[T]) => void) {
    this.emitter.off(event, handler);
  }

  disconnect() {
    this.socket?.disconnect();
    this.socket = null;
  }
}

export default SocketIOService;
