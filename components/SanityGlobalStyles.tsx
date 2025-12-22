import { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { client } from '../lib/sanity'

const GlobalStyles = createGlobalStyle<{ primaryColor?: string; secondaryColor?: string; fontFamily?: string }>`
  :root {
    ${props => props.primaryColor && `--primary-color: ${props.primaryColor};`}
    ${props => props.secondaryColor && `--secondary-color: ${props.secondaryColor};`}
    ${props => props.fontFamily && `--font-family: ${props.fontFamily};`}
  }

  body {
    ${props => props.fontFamily && `font-family: ${props.fontFamily} !important;`}
  }
  
  /* Apply to specific elements if needed, based on existing CSS variables or classes */
  .text-primary, .bg-primary {
    ${props => props.primaryColor && `color: ${props.primaryColor};`}
  }
`

export default function SanityGlobalStyles() {
  const [settings, setSettings] = useState<any>(null)

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await client.fetch(`*[_type == "siteSettings"][0]`)
        if (data) {
          setSettings(data)
        }
      } catch (error) {
        console.error('Failed to fetch site settings:', error)
      }
    }

    fetchSettings()
  }, [])

  if (!settings) return null

  return (
    <GlobalStyles
      primaryColor={settings.primaryColor}
      secondaryColor={settings.secondaryColor}
      fontFamily={settings.fontFamily}
    />
  )
}
