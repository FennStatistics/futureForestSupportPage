<form
className="bg-white shadow-lg rounded-md p-5 md:p-10 flex flex-col w-11/12 max-w-lg"
>
<label htmlFor="email" className="mb-5">
<span>Email</span>
<input
type="email"
name="email"
id="email"
className="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800 peer"
placeholder="write your Email"
required
pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
/>
<span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
Please enter a valid email address
</span>
</label>
<label htmlFor="password" className="mb-5">
  <span>Password</span>
  <input
    type="password"
    name="password"
    id="password"
    className="w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800"
    placeholder=" "
    required
  />
</label>
<button type="submit" className="mt-5 bg-blue-500 py-3 rounded-md text-white">Submit</button>
</form>