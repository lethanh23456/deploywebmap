class SessionStorageService {
    static getItem(key: string) {
        return sessionStorage.getItem(key);
    }

    static setItem(key: string, value: string) {
        sessionStorage.setItem(key, value);
    }
    
    static removeItem(key: string) {
        sessionStorage.removeItem(key);
    }

    static clear() {
        sessionStorage.clear();
    }
}

export default SessionStorageService;