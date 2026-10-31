import Admin from "./User.js";
import {log as logger} from "./analytics.js";

const admin = new Admin("Jack");
logger(admin.greet());



