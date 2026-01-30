function DeepDiving() {
  return (
    <main className="main-content">
      <div className="content-wrapper">
        <article>
          <header>
            <h1>Deep Dives</h1>
            <p>
              Longer-form explorations where I try to understand things from
              first principles and connect ideas across domains.
            </p>
          </header>

          <ol>
            <li>
              <h3>
                How Machine Learning Systems Fail in Practice
              </h3>
              <p>
                An exploration of real-world failure modes in ML systems,
                including data leakage, distribution shift, and evaluation
                blind spots.
              </p>
            </li>

            <li>
              <h3>
                Security as a Systems Problem
              </h3>
              <p>
                Viewing software security not as isolated bugs, but as an
                emergent property of system design, incentives, and human
                behavior.
              </p>
            </li>

            <li>
              <h3>
                What Makes a Project Worth Finishing
              </h3>
              <p>
                Reflections on scope, motivation, and why most projects fail
                before they ever become useful.
              </p>
            </li>

            <li>
              <h3>
                Learning Complex Topics Without Getting Lost
              </h3>
              <p>
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
