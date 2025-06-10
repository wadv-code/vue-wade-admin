// 用户信息
declare interface UserInfo {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  name: string;
  password: string;
  sex: UserSex;
  seq: number;
  age: number;
  avatar: string;
  remarks: string;
  email?: string;
}

// 用户状态机
declare interface UserInfoState {
  userInfo: UserInfo;
  username: string;
  token?: string;
}
