import { SignInWithPasswordRequest } from "@/types/apis/requests/auths";
import request from "@/utils/requests";

export const login = (data: SignInWithPasswordRequest) => {
  const response = request({
    url: '/auths/login',
    method: 'post',
    data
  })
  return response;
}

export const logout = () => {
  const response = request({
    url: '/auths/logout',
    method: 'post'
  })
  return response;
}
