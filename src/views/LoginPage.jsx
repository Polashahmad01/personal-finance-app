import RegisterContentCard from "../components/RegisterContentCard";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <section className="flex flex-col min-h-screen gap-8 lg:flex-row lg:justify-center lg:items-center">
      <div className="flex-1 flex justify-center items-center bg-[#6a3ee5] h-screen lg:rounded-tr-xl lg:rounded-br-xl">
        <RegisterContentCard />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <LoginForm />
      </div>
    </section>
  );
}
