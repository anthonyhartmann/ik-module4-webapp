import { gapi } from "gapi-script"
import React, { useState } from "react"
import './DriveExaminer.css'
// This in-class example used credentials for a personal Google Drive Cloud instance that was
// set up specifically for it! If you wanted to try it yourself, there's an excellent guide here: 
// https://developers.google.com/drive/api/quickstart/nodejs
// For this branch these credentials are left blank.
import credentials from './credentials.json'

const DriveExaminer: React.FC = () => {

  const [files, setFiles] = useState<any>(null)
  const [showFiles, setShowFiles] = useState<boolean>(false)
  const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly'
  const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']

  function initClient() {
    gapi.client
      .init({
        apiKey: credentials.API_KEY,
        clientId: credentials.CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(
        () => {
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignin)
          updateSignin(gapi.auth2.getAuthInstance().isSignedIn.get())
        }
      )
  }

  const updateSignin = (isSignedIn: boolean) => {
    if (isSignedIn) {
      getFiles()
    } else {
      authenticate()
    }
  }

  const authenticate = () => {
    gapi.auth2.getAuthInstance().signIn()
  }
  
  const handleClientLoad = () => {
    gapi.load('client:auth2', initClient)
  }

  const getFiles = () => {
    gapi.client.drive.files
      .list({
        pageSize: 10,
        fields: 'nextPageToken, files(name)',
        q: null
      })
      .then(function (response: { body: string }) {
        setShowFiles(true)
        const res = JSON.parse(response.body)
        setFiles(res.files)
      })
  }

  return (
    <div>
      <div className="Drivebar-item" onClick={() => handleClientLoad()}>Check your Google Drive!</div>
      {showFiles && 
        <div className="Files-info">
          We've pulled {files.length} documents! The first is named: {files[0].name}
        </div>
      }
    </div>
  )
}

export default DriveExaminer
