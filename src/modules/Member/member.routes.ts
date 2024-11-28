import { Router } from "express";
import { memberControllers } from "./member.controller";

const memberRouter = Router();

memberRouter.post("/", memberControllers.createMember);

memberRouter.get("/", memberControllers.getAllMembers);

memberRouter.get("/:memberId", memberControllers.getMember);

memberRouter.put("/:memberId", memberControllers.updateMember);

memberRouter.delete("/:memberId", memberControllers.deleteMember);

export default memberRouter;
