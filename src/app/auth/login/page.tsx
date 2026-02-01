// export default function Page() {
//   return (
//     <div className="w-full max-w-md bg-white rounded-soft shadow-soft p-10">
//       <div className="mb-8 text-center">
//         <h1 className="font-heading text-3xl text-charcoal mb-2">
//           Welcome to Handcrafted Haven
//         </h1>
//         <p className="font-body text-sm text-charcoal/70">
//           Real craftsmanship, made with intention.
//         </p>
//       </div>

//       <form className="space-y-5 font-body">
//         <div>
//           <label className="block text-sm text-charcoal mb-1">Email</label>
//           <input
//             type="email"
//             placeholder="tu@email.com"
//             className="w-full rounded-soft border border-charcoal/20 px-3 py-2 text-sm
//                        focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage"
//           />
//         </div>

//         <div>
//           <label className="block text-sm text-charcoal mb-1">Contraseña</label>
//           <input
//             type="password"
//             placeholder="••••••••"
//             className="w-full rounded-soft border border-charcoal/20 px-3 py-2 text-sm
//                        focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full mt-4 bg-terracotta text-white py-2.5 rounded-soft text-sm font-medium
//                      transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-terracotta/30"
//         >
//           Iniciar sesión
//         </button>

//         <button
//           type="button"
//           className="w-full border-2 border-sage text-sage py-2.5 rounded-soft text-sm font-medium
//                      transition-colors hover:bg-sage/10"
//         >
//           Crear cuenta
//         </button>
//       </form>

//       <p className="mt-6 text-center text-xs text-charcoal/60 font-body">
//         Mabe by Jared Rezabala
//       </p>
//     </div>
//   );
// }
export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#FAF9F7]">
      <div className="w-full max-w-md bg-white rounded-soft shadow-soft p-10">
        <div className="mb-8 text-center">
          <h1 className="font-heading text-3xl text-charcoal mb-2">
            Welcome to Handcrafted Haven
          </h1>
          <p className="font-body text-sm text-charcoal/70">
            Real craftsmanship, made with intention.
          </p>
        </div>

        <form className="space-y-5 font-body">
          <div>
            <label className="block text-sm text-charcoal mb-1">Email</label>
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full rounded-soft border border-charcoal/20 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage"
            />
          </div>

          <div>
            <label className="block text-sm text-charcoal mb-1">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-soft border border-charcoal/20 px-3 py-2 text-sm
                         focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-terracotta text-white py-2.5 rounded-soft text-sm font-medium
                       transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-terracotta/30"
          >
            Iniciar sesión
          </button>

          <button
            type="button"
            className="w-full border-2 border-sage text-sage py-2.5 rounded-soft text-sm font-medium
                       transition-colors hover:bg-sage/10"
          >
            Crear cuenta
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-charcoal/60 font-body">
          Made by Jared Rezabala
        </p>
      </div>
    </div>
  );
}
