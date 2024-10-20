import RegisterContentCard from "../components/RegisterContentCard";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <section className="flex justify-center items-center h-screen gap-8">
      <div className="flex-1">
        <RegisterContentCard />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <RegisterForm />
      </div>
    </section>
  );
}
