
import Toolbar from "./toolbar"
import Mainheader from "./mainheader";
import Mainfooter from "./mainfooter";

function Main(){
    return(
        <main className="email-view">
        <Toolbar/>
        <article className="email-content">
          <Mainheader/>
          <Mainfooter/>
        </article>
      </main>
    )
}

export default Main