#!/usr/bin/env node

import chalk from "chalk";

function introduce() {
  console.log(chalk.yellowBright(`
  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃   🚀 Welcome to Albin Thomas' World!   ┃
  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
  `));

  console.log(chalk.green(`
    Hey there! I'm ${chalk.bold('Albin Thomas')} 👋
    ----------------------------------------------
    🖥️ Passionate Developer & Tech Explorer  
    📖 Sci-Fi Writer | Founder of Artcil  
    🚀 Space & AI Enthusiast  
    🎓 BCA Student at BVM Holy Cross College  

    I love crafting futuristic ideas, coding innovative solutions,  
    and diving deep into AI, software development, and web technologies.  
    Currently working on exciting projects in AI-integrated applications  
    and sustainable tech with Artcil.

    Let’s build the future together!  
  `));

  console.log(chalk.blueBright(`
  ╔══════════════════════════════════╗
  ║   🌍 Connect with me online!     ║
  ╟──────────────────────────────────╢
  ║ 🔗 GitHub:   ${chalk.cyan("github.com/MrWings22")}   ║
  ║ 🔗 LinkedIn: ${chalk.magenta("linkedin.com/in/albin-thomas22")} ║
  ║ 📧 Email:    ${chalk.red("albinthomas6210@gmail.com")}    ║
  ╚══════════════════════════════════╝
  `));

  console.log(chalk.gray(`
  "The future belongs to those who dare to innovate." 🚀
  `));
}

introduce();
