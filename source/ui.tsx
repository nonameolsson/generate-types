import { Box, Text, useApp, useInput } from 'ink'
import React from 'react'

const initial = 1
const down = 10
const right = 20
const step = 1

function App({ name = 'Stranger' }: { name?: string }): JSX.Element {
  const { exit } = useApp()
  const [x, setX] = React.useState(initial)
  const [y, setY] = React.useState(initial)

  useInput((input, key) => {
    if (input === 'q') {
      exit()
    }

    if (key.leftArrow) {
      setX(Math.max(step, x - step))
    }

    if (key.rightArrow) {
      setX(Math.min(right, x + step))
    }

    if (key.upArrow) {
      setY(Math.max(step, y - step))
    }

    if (key.downArrow) {
      setY(Math.min(down, y + step))
    }
  })

  return (
    <Box flexDirection='column'>
      <Text color='green'>Hello, {name}</Text>
      <Text>Use arrow keys to move the face. Press “q” to exit.</Text>
      <Box height={12} paddingLeft={x} paddingTop={y}>
        <Text>^_^</Text>
      </Box>
    </Box>
  )
}

module.exports = App
export default App
