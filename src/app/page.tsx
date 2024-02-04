import LoginButton from '@/components/auth/login-button';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700">
      <LoginButton>
        <Button size="lg">Войти</Button>
      </LoginButton>
    </main>
  );
}
