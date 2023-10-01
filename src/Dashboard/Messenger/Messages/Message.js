import React from "react";
import { styled } from "@mui/system";
import Avatar from "../../../shared/components/Avatar";
import Typography from "@mui/material/Typography";

const MainContainer = styled("div")({
  width: "97%",
  display: "flex",
  marginTop: "10px",
});

const AvatarContainer = styled("div")({
  width: "70px",
});

const MessageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  borderRadius: "5px",
  padding:"3px 20px"
});

const MessageContent = styled("div")({
  color: "#DCDDDE",
});

const SameAuthorMessageContent = styled("div")({
  color: "#DCDDDE",
  width: "97%",
});

const SameAuthorMessageText = styled("span")({
  marginLeft: "0px",
  borderRadius: "5px",
  padding:"3px 20px",
  marginTop:'10px'
});

const Message = ({
  content,
  sameAuthor,
  headerName,
  username,
  date,
  sameDay,
}) => {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent
        sx={{
          display: "flex",
          justifyContent: username === headerName ? "right" : "left",
          
        }}
      >
        <SameAuthorMessageText sx={{ 
          background: username === headerName ? "#075e54" : "#72767d",
          textAlign: username === headerName ? "right" : "left", 
          }}>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }

  return (
    <MainContainer
      sx={{
        justifyContent: username === headerName ? "right" : "left",
      }}
    >
      {/* <AvatarContainer>
        <Avatar username={username} />
      </AvatarContainer> */}
      <MessageContainer
        sx={{
          background: username === headerName ? "#075e54" : "#72767d",
        }}
      >
        <Typography
          style={{ fontSize: "16px", fontWeight: "bold",
          textAlign: username === headerName ? "right" : "left", 
          color: "white" }}
        >
          {username}{" "}
          {/* <span style={{ fontSize: "12px", color: "#72767d" }}>{date}</span> */}
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
};

export default Message;
