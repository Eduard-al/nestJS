import { v4 as uuidv4} from 'uuid'

const publicPath = './public'
let path: string = publicPath

export class HelperFileLoader {
    static set path(_path: string) {
        path = publicPath + _path
    }

    public static customFileName(req, file, cb) {
        const originalName = file.originalname.split('.')
        console.log(originalName )
        const fileExtansion = originalName[originalName.length - 1]
        console.log(fileExtansion )
        cb(null, `${uuidv4()}.${fileExtansion}`)
    }

    public static destinationPath(req, file, cb) {
        cb(null, path)
    }
}

