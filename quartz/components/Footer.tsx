import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"
interface Options {
  links: Record<string, string>
  contact: Record< string, string>
  
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
         <p>
          I would love to read your comments, 
          <a href="mailto:arturo.borradores@gmail.com?subject=Website%20feedback">
            {" email me!"}            
          </a>

          </p>
          <p>
            You can also 
            <a href = "mailto:arturo.borradores@gmail.com?subject=Blog%20Subscription?content=I%20want%20to$20recieve%20updates!">
              {" subscribe "}
            </a>
            to new post notifications, or
          
            <a href = "mailto:arturo.borradores@gmail.com?subject=Unsubscribe%20me!">
              {" unsubscribe "}
            </a>
            at any time!
          </p>
      
         <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>

      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
