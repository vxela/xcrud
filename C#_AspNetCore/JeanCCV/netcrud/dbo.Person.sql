USE [netcrud]
GO

/****** Object: Table [dbo].[Person] Script Date: 10/16/2019 10:11:11 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Person] (
    [Id]       NCHAR (50) NOT NULL,
    [Name]     NCHAR (10) NULL,
    [Lastname] NCHAR (10) NULL,
    [Phone]    INT        NULL,
    [Age]      INT        NULL
);


