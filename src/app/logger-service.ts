import { Injectable } from "@angular/core"

@Injectable({
    providedIn: "root"
})
export class LoggerService{
    log(msg) {console.log(msg)};
    error(msg) {console.error(msg)};
    warn(msg) {console.warn(msg)};
}