import { format } from "date-fns";

export function dateToString(date) {
  if (!date) { return ''; }
  return format (date, 'yyyy年M月d日 HH時mm分');
}

export function translateErrors (code) {
  const error = { title: 'エラー', descripution: '時間をおいてお試しください' };
  switch(code) {
    case 'auth/invalid-email':
      error.descripution = 'メールアドレスが不正です。';
      break;
    case 'auth/user-disabled':
      error.descripution = 'アカウントが無効です。';
      break;
    case 'auth/user-not-found':
      error.descripution = 'ユーザーが見つかりませんでした。';
      break;
    case 'auth/wrong-password':
      error.descripution = 'パスワードが間違っています。';
      break;
    case 'auth/email-already-in-use':
      error.descripution = 'メールアドレスが使用されています。';
      break;
    case 'auth/operation-not-allowed':
      error.descripution = '開発者にお問い合わせください。';
      break;
    case 'auth/weak-password':
      error.descripution = 'パスワードが簡単すぎます。';
      break;
    default:
  }
  return error;
}
