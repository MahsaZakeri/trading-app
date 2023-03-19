import subscribe from "../types/subscribe";
import unsubscribe from "../types/unsubscribe";

export default class WebSocketClient {
  private static instance: WebSocketClient;
  readonly socketProtocol: string =
    window.location.protocol === "https:" ? "wss:" : "ws:";
  port = "";
  socket: any = null;
  echoSocketUrl: string = "";
  private constructor(port: string = "") {
    this.port = port;
    this.echoSocketUrl =
      this.socketProtocol + "//" + window.location.hostname + port + "/ws";
    this.connect();
  }
  public static getInstance(port: string): WebSocketClient {
    if (!WebSocketClient.instance) {
      WebSocketClient.instance = new WebSocketClient(port);
    }

    return WebSocketClient.instance;
  }

  private connect() {
    this.socket = new WebSocket(this.echoSocketUrl);
    this.socket.onopen = () => {
      console.log("Successfully connected to the websocket server...");
    };
    this.socket.onclose = () => {
      alert("WS is disconnected and the data is not up to date");
    };
  }
  public getSocket() {
    return this.socket;
  }
  public sendMessage(msg: string, type: number) {
    let data: unsubscribe | subscribe;
    if (type === 1) {
      data = {
        subscribe: msg,
      };
    } else {
      data = {
        unsubscribe: msg,
      };
    }
    this.socket!.send(JSON.stringify(data));
  }
}
