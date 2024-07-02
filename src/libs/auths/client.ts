import type { User } from "@/types/user";

function generateToken(): string {
  const arr = new Uint8Array(12);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
}

const user = {
  id: "1578574nkfn398479",
  username: "demo@primacy",
  fullname: "Nguyễn Văn A",
  email: "nguyenvana@example.com",
  password: "123456aA@",
  role: "admin",
  gender: "male",
  address: "123 Đường ABC, Quận 1, TP. HCM",
  phone_number: "0901234567",
  avatar: "https://example.com/avatar.jpg",
  created_at: "01/07/2024",
  updated_at: "02/07/2024",
  created_by: "system",
  updated_by: "admin",
} satisfies User;

export interface SignUpParams {
  username: string;
  fullname: string;
  email: string;
  password: string;
}

export interface SignInWithOAuthParams {
  provider: 'google' | 'microsoft';
}

export interface SignInWithPasswordParams {
  username: string;
  password: string;
}

export interface ResetPasswordParams {
  email: string;
}

class AuthClient {
  async signUp(_: SignUpParams): Promise<{ error?: string }> {
    // Make API request
    const token = generateToken();
    localStorage.setItem('custom-auth-token', token);
    return {};
  }

  async signInWithOAuth(_: SignInWithOAuthParams): Promise<{ error?: string }> {
    return { error: 'Social authentication not implemented' };
  }

  async signInWithPassword(
    params: SignInWithPasswordParams,
  ): Promise<{ error?: string }> {
    const { username, password } = params;
    console.log("username", username, params);
    console.log("password", password);
    // We do not handle the API, so we'll check if the credentials match with the hardcoded ones.
    if (username !== 'demo@primacy' || password !== '123456aA@') {
      return {
        error: 'Invalid credentials. Please re-check email or password',
      };
    }
    const token = generateToken();
    localStorage.setItem('custom-auth-token', token);
    return {};
  }

  async resetPassword(_: ResetPasswordParams): Promise<{ error?: string }> {
    return { error: 'Password reset not implemented' };
  }

  async updatePassword(_: ResetPasswordParams): Promise<{ error?: string }> {
    return { error: 'Update reset not implemented' };
  }

  async getUser(): Promise<{ data?: User | null; error?: string }> {
    // Make API request

    // We do not handle the API, so just check if we have a token in localStorage.
    const token = localStorage.getItem('custom-auth-token');

    if (!token) {
      return { data: null };
    }

    return { data: user };
  }

  async signOut(): Promise<{ error?: string }> {
    localStorage.removeItem('custom-auth-token');

    return {};
  }
}

export const authClient = new AuthClient();
