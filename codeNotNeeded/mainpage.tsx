
<div className=" mx-auto">
<details
  className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
  open={true}
>
  <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
    Why do they call it Ovaltine?
  </summary>
  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
    <p>
      The mug is round. The jar is round. They should call it
      Roundtine dlkxlkjf jsdlkf jdsj jfdskdkjf kjsdf jdskjf kjdskj
      fjkdskj kjdsf jdskjf kjdkjdf kjskjf skjdkjf dskjjfsk kjsdfkj
      dskjfds.
    </p>
    <p>
      The mug is round. The jar is round. They should call it
      Roundtine.
    </p>
    <p>
      The mug is round. The jar is round. They should call it
      Roundtine.
    </p>
    <p>
      The mug is round. The jar is round. They should call it
      Roundtine.
    </p>
    <p>
      The mug is round. The jar is round. They should call it
      Roundtine.
    </p>
    <p>
      The mug is round. The jar is round. They should call it
      Roundtine.
    </p>
  </div>
</details>
</div>

<div className=" mx-auto">
<details
  className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
  open
>
  <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
    Why do they call it Ovaltine?
  </summary>
  <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
    <p>
      The mug is round. The jar is round. They should call it
      Roundtine.
    </p>
  </div>
</details>
</div>




<div className="grid grid-cols-2 gap-2">
<div className="bg-gray-200 row-span-3">
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
  erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
  et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
  accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
  no sea takimata sanctus est Lorem ipsum dolor sit amet.
</div>
<div className="bg-gray-200">2</div>
<div className="bg-gray-200">3</div>
<div className="bg-gray-200">4</div>
</div>

<h2 className="font-bold text-4xl mb-4">Next steps</h2>
{isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}