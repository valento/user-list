import { Prisma } from '.prisma/schema-webapi/client/webapi'
import { UserList } from '@user-list/ui'

export default async function Page() {

  const { data } = await fetch('http://localhost:3000/api/user').then( results => results.json())
  
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome web 👋
            </h1>
          </div>

          <div>
            <UserList data={data} />
          </div>

          <div id="hero" className="rounded">
            
            <div id="other-links">
              <a
                id="nx-console"
                className="button-pill rounded shadow"
                href="https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console&utm_source=nx-project"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  Install Nx Console for VSCode
                  <span>The official VSCode extension for Nx.</span>
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
