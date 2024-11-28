import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { memberServices } from "./member.service";

const createMember = catchAsync(async (req, res) => {
  const result = await memberServices.createMember(req?.body);

  sendResponse(res, {
    success: true,
    status: 201,
    message: "Member created successfully",
    data: result,
  });
});

const getAllMembers = catchAsync(async (req, res) => {
  const result = await memberServices.getAllMembers();

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Members retrieved successfully",
    data: result,
  });
});

const getMember = catchAsync(async (req, res) => {
  const { memberId } = req?.params;
  const result = await memberServices.getMember(memberId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member retrieved successfully",
    data: result,
  });
});

const updateMember = catchAsync(async (req, res) => {
  const { memberId } = req?.params;
  const result = await memberServices.updateMember(memberId, req?.body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member updated successfully",
    data: result,
  });
});

const deleteMember = catchAsync(async (req, res) => {
  const { memberId } = req?.params;
  const result = await memberServices.deleteMember(memberId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member successfully deleted",
    // data: result,
  });
});

export const memberControllers = {
  createMember,
  getAllMembers,
  getMember,
  updateMember,
  deleteMember,
};
