import LoginForm from '@/app/components/LoginForm';
import HomePage from './components/HomePage';

export default function Page() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      {/* <LoginForm /> */}
      <HomePage />
    </div>
  );
}