import path from "node:path"
import { existsSync } from "node:fs"
import { exit } from "node:process"
import AdmZip from "adm-zip"

const CWD = process.cwd()
const BUILD_PATH = path.resolve(CWD, "build")

if (existsSync(BUILD_PATH)) {
    const zip = new AdmZip()
    zip.addLocalFolder(BUILD_PATH)
    zip.writeZip(path.resolve(CWD, "dist.zip"))

    console.log("Build result zipped as `dist.zip`")
} else {
    console.error(`build path not found (${BUILD_PATH})`)
    exit(-1)
}
