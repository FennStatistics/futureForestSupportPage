import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from '@/components/HeaderLoggedIn'
import HeaderLoggedOut from '@/components/HeaderLoggedOut'

import RestPasswordForm from "./restPasswordForm";

import ButtonForgotPassword from '@/components/Buttons/ForgotPassword'

export default async function LoginPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <main className="flex flex-col gap-5 w-full max-w-6xl px-3 text-xl animate-in">
    {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      <div className="text-2xl font-semibold text-center">
Please enter your new password:
  <p className="text-sm font-light text-gray-600"> The update password button is disabled till you entered your new password. </p>
      </div>
          <form>
<RestPasswordForm />
    </form>
    <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col px-10">
    </div>
    </main>
  )
}