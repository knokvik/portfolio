function DeepDiving() {
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <article className="space-y-10">

          <header className="space-y-2">
            <h1 className="text-3xl font-semibold">Deep Dives</h1>
            <p className="text-sm leading-relaxed text-gray-700">
              Longer-form explorations where I try to understand things from
              first principles and connect ideas across domains.
            </p>
          </header>

          <ol className="space-y-6">

            <li>
              <h3 className="text-lg font-medium">
                How Machine Learning Systems Fail in Practice
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                An exploration of real-world failure modes in ML systems,
                including data leakage, distribution shift, and evaluation
                blind spots.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-medium">
                Security as a Systems Problem
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Viewing software security not as isolated bugs, but as an
                emergent property of system design, incentives, and human
                behavior.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-medium">
                What Makes a Project Worth Finishing
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Reflections on scope, motivation, and why most projects fail
                before they ever become useful.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-medium">
                Learning Complex Topics Without Getting Lost
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                Strategies I use to approach large subjects without losing
                momentum or clarity.
              </p>
            </li>

          </ol> 

        </article>
      </div>
    </main>
  )
}

export default DeepDiving
