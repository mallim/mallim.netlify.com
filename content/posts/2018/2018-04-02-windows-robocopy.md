---
title: "There is a utility known as robocopy in windows ..."
date: 2018-04-02 19:04:00
author: mallim
tags:
  - windows
  - robocopy
---

This utility is pretty interesting if you want to do bulk copy via command line in windows.

This post is my quick reference on it.

robocopy is a wonderful alternative in Windows (though not par with rsync) available out of box, native command simple syntax and well documented (robocopy /?).

You can compile this robocopy operations in a batch file and run through Task scheduler to automate sync. It works! No more third party tools for sync!

#### Example 1

> robocopy <source_dir> <target_dir> /DCOPY:DA /MIR /FFT /Z /XA:SH /R:0 /TEE /XJD /XD AppData /XD OneDrive /XD SkyDrive\*

| Syntax         | Remarks                                                                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| _<source_dir>_ | It is the directory which I want to sync                                                                                                      |
| _<target_dir>_ |                                                                                                                                               |
| _/DCOPY:DA_    | Copy Data and Attributes.                                                                                                                     |
| _/MIR_         | It mirrors the entire directory tree <source_dir> in <target_dir> . It also deletes destination files which no longer exists in <source_dir>. |
| _/FFT_         | This is to support FAT file systems which needs a tweak to support timestamp validation by copy logic in robocopy tool.                       |
| _/Z_           | Copy operation can be resumed after termination.                                                                                              |
| _/XA:SH_       | Exclude System (S) files and Hidden (H) files                                                                                                 |
| _/R:0_         | Number of retries on failed copy operation. By default it does retry for 1 million times, which is useful in poor network.                    |
| _/TEE_         | Output to console window and log file – In this case I haven’t used log file. You have to add “/LOG:file” option too.                         |
| _/XJD_         | excluding Junction Points (symbolic link) of directories from copying                                                                         |
| _/XD_          | AppData /XD OneDrive /XD SkyDrive – \*list of directories to be excluded from copying                                                         |

#### Example 2

> robocopy \\SourceServer\Share \\DestinationServer\Share /MIR /FFT /Z /XA:H /W:5 >>

| Syntax | Remarks                                                                                                                                                                                                                                       |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /MIR   | specifies that robocopy should mirror the source directory and the destination directory. Beware that this may delete files at the >> destination.                                                                                            |
| /FFT   | uses fat file timing instead of NTFS. This means the granularity is a bit less precise. For across-network share operations this seems to be much more reliable - just don’t rely on the file timings to be completely precise to the second. |
| /Z     | ensures robocopy can resume the transfer of a large file in mid-file instead of restarting.                                                                                                                                                   |
| /XA:H  | makes robocopy ignore hidden files, usually these will be system files that we’re not interested in.                                                                                                                                          |
| /W:5   | reduces the wait time between failures to 5 seconds instead of the 30 second default.                                                                                                                                                         |
