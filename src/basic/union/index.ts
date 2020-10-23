type State =
  | "Unknown"
  | "Resetting"
  | "Unsupported"
  | "Unauthorized"
  | "PoweredOn"
  | "PoweredOff";

type Device = {
  id: string;
  name?: string;
  rssi?: number;
  state: State;
};

type Action = LogAction | ClearLogsAction | ConnectAction | DisconnectAction;

type LogAction = {
  type: "LOG";
  payload: {
    message: string;
  };
};

type ClearLogsAction = {
  type: "CLEAR_LOGS";
};

type ConnectAction = {
  type: "CONNECT";
  payload: {
    device: Device;
  };
};

type DisconnectAction = {
  type: "DISCONNECT";
};
