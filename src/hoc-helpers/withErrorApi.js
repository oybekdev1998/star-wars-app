import React, {useState} from 'react'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'

export const withErrorApi = (View) => {

  return props => {
  const [errorApi, setErrorApi] = useState(false);

    return(
     <> {
        errorApi ? <View setErrorApi={setErrorApi} {...props} /> : <ErrorMessage />
      }
     </>
    )
  }

}