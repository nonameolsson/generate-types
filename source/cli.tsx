#!/usr/bin/env node
import { render } from 'ink'
import meow from 'meow'
import App from './ui'

const cli = meow(
  `
	Usage
	  $ generate-assets

	Options
		--name  Your name

	Examples
	  $ generate-assets --name=Jane
	  Hello, Jane
`,
  {
    flags: {
      name: {
        type: 'string'
      }
    }
  }
)

render(<App name={cli.flags.name} />)
