export {};

declare global {
    namespace Express {
        interface Request extends Express.Request {
            user?: import("../models/User.interface").IUserMethods;
            token?: String,
        }
    }
}