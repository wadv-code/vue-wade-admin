// 用户信息
declare interface UserInfo {
  // authBtnList: string[];
  // photo: string;
  // roles: string[];
  // time: number;
  // userName: string;
  // [key: string]: T;
  id: string;
  login_name: string;
  avatar: string;
  job: string;
  name: string;
  organization: string;
  role: string;
  dep_id: string;
  org_id: string;
  sex: string;
  created_on?: string;
  role_name?: string;
  dep_name?: string;
  mobile_phone?: string;
  user_code?: string;
  position_name?: string;
  role_id?: string[];
}

// 用户状态机
declare interface UserInfoState {
  userInfo: UserInfo;
  login_name: string;
  token?: string;
}
