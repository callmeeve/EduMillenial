import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <div className="error-404">
      <div className="error-code m-b-10 m-t-20">404</div>
      <h2 className="font-bold">Oops 404! User can’t be found.</h2>
      <div className="error-desc">
        Sorry, but the page you are looking for was either not show because Login Failed. <br />
        Click the button below to go back to the LoginPage.
        <div><br />
          <Link href="/login"><a className="btn btn-primary">Go back to LoginPage</a></Link>
        </div>
      </div>
    </div>

  </>
}