
Tiny hook to support forceUpdate() behaviour.

[![npm](https://img.shields.io/npm/v/react-hooks-force-update)](https://www.npmjs.com/package/react-hooks-force-update)

## Install

``yarn add react-hooks-force-update``

or 

```npm i -S react-hooks-force-update```

## Usage


```tsx
import useForceUpdate from 'react-hooks-force-update'
import {useEffect} from "react";

function App() {
  const [value, forceUpdate] = useForceUpdate()

  console.log('App render')
  
  useEffect(() => {
    console.log('useEffect is updated')
  }, [value])

  useEffect(() => {
      const interval = setInterval(() => forceUpdate(), 1000)
      return () => clearInterval(interval)
  })
}
```



