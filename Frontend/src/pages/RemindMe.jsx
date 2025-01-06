import VideoAndDescription from "../components/video-and-description/VideoAndDescription";
import ProjectInfo from "../components/project-info/ProjectInfo";
import "./remindMe.css"


function RemindMe() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
        <h1 style={{marginTop: '0%'}}>Remind Me</h1>
        <VideoAndDescription />
        <ProjectInfo />
      </div>
    )
  }
  
  export default RemindMe;
  