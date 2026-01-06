(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,45243,(e,t,i)=>{t.exports={maze:`# This file is used to declare a fractal maze. 
# You can copy it to create a new maze. To help
# you do so, each component of the maze is described
# before being added. You can also add your own
# commentaries by making a line that start with a #. 

# == ALICE AND THE FRACTAL HEDGE MAZE == #
# Adapted from Mike Earnest's maze at https://puzzling.stackexchange.com/questions/37675/alice-and-the-fractal-hedge-maze

# COLORS
# Some global colors are set to personalize the maze. 
# For now, it is possible to set: 
# - The background color of the upmost level with OUTSIDE_COLOR;
# - The color of the walls with BACKGROUND_COLOR;
# - The color of the path on with PATH_COLOR;
# - The color of the line drawn when the player moves with LINE_COLOR.
# These colors must be set before declaring any component of the maze. 
# Format: COLOR_NAME #RRGGBB

OUTSIDE_COLOR #82be38
BACKGROUND_COLOR #477f1e
PATH_COLOR #b77c44
LINE_COLOR #ff0000

# SIZE DESCRIPTION
# It is possible to set the size of the tiles to adjust the rendering of the 
# maze. The tile's size must be set before declaring any component of the maze. 
# Format: TILE_SIZE size

TILE_SIZE 40

# TILE DESCRIPTION
# Tiles are the basic components of the maze, each row of the maze is described
# as a succession of tiles, each being a 4-bit number written on two digits. This 
# number indicates in which directions the tile can be entered or left by a natural
# path (that is, not by using a teleporter, an exit or a link), each bit indicating 
# if a path is set in a given direction. 
# Tiles must be declared before any other components of the maze. 
#
# ORIENTATION VALUES:
# 8 = 1000 = North
# 4 = 0100 = East
# 2 = 0010 = South
# 1 = 0001 = West
# Examples:   10 = 1010      => A tile with a vertical path.
#           0501 = 0101|0001 => Two tiles with an horizontal path that has no exit eastward. 

# ======== MAZE ======== #
06050505050302000000000200
10040505011010000405051102
12010000001010020000000810
00000000000810080000000411
06010000000008000000000409
10020202000405050102000000
08081010040503000010000601
06050908000010000413011000
10000000000411020000001000
10020000000210080000000800
10100000001008000000000000
08140505011205050304050501
00080000000000001205050100
# ====== END MAZE ====== #

# TELEPORT DESCRIPTION
# A teleporter allows the player to move in a direction while skipping a few tiles.
# This is useful e.g for drawing a path that goes under another one.
# Format: TELEPORT row col orientation+reach
# Example: TELEPORT 00 00 4+3 => Teleport from (0,0) to (0,3) (3 tiles east)

TELEPORT 06 02 4+2
TELEPORT 06 04 1+2
TELEPORT 06 01 2+2
TELEPORT 08 01 8+2
TELEPORT 05 01 4+2
TELEPORT 05 03 1+2
TELEPORT 05 08 4+2
TELEPORT 05 10 1+2
TELEPORT 04 06 2+2
TELEPORT 06 06 8+2
TELEPORT 05 05 2+2
TELEPORT 07 05 8+2
TELEPORT 07 05 2+2
TELEPORT 09 05 8+2
TELEPORT 10 05 4+2
TELEPORT 10 07 1+2
TELEPORT 10 06 2+2
TELEPORT 12 06 8+2

# PLAYER DESCRIPTION
# The player is the in-game avatar of the actual player. 
# The player must be declared before any trophy/exit.
# Format: PLAYER row col #RRGGBB

PLAYER 01 01 #0000ff

# TROPHY DESCRIPTION
# Trophies are an optional component of the maze. 
# Reaching a trophy wins the game. 
# Trophies can only be placed on the topmost level of the maze.
# If no trophies are set, reaching an exit on the topmost level
# of the maze wins the game. 
# When used, trophies must be declared before any exit.
# Format: TROPHY row col #RRGGBB



# EXIT DESCRIPTION
# An exit allows the player to move outside the block they are 
# currently in and to leave the maze if there is no trophies.
# Exits must be declared before any link can be made.
# Format: EXIT name orientation row col

EXIT 01 8 00 01
EXIT 02 8 00 06
EXIT 03 8 00 11
EXIT 04 4 01 12
EXIT 05 4 06 12
EXIT 06 4 11 12
EXIT 07 2 12 11
EXIT 08 2 12 06
EXIT 09 2 12 01
EXIT 10 1 11 00
EXIT 11 1 06 00
EXIT 12 1 01 00

# BLOCK DESCRIPTION
# A block is a copy of the maze within itself.
# Blocks must be declared before any link is added to them.
# Format: BLOCK name row col width height #RRGGBB

BLOCK A 02 02 03 03 #fff7ac
BLOCK B 02 08 03 03 #a3d0e7
BLOCK C 08 02 03 03 #daa5c1
BLOCK D 08 08 03 03 #cbcbcb

# LINK DESCRIPTION
# A link allows the player to move inside a block. 
# A link must be declared after the block it links to. 
# A link can also link to a block inside one block or more. 
# In that case, the chain of blocks must be entirely described,
# separated by '+'.
# Format: LINK block_name[+block_name[+block_name[+...]]] exit_name row col

LINK A 03 01 04
LINK A 05 03 05
LINK A 09 05 02
LINK A 10 04 01
LINK A 12 02 01

LINK B 01 01 08
LINK B 04 02 11
LINK B 05 03 11
LINK B 06 04 11
LINK B 07 05 10
LINK B 08 05 09
LINK B 11 03 07
LINK B 12 02 07

LINK C 02 07 03
LINK C 04 08 05
LINK C 07 11 04
LINK C 11 09 01
LINK C 12 08 01

LINK D 01 07 08
LINK D 03 07 10
LINK D 04 08 11
LINK D 05 09 11
LINK D 08 11 09
LINK D 10 10 07
LINK D 11 09 07
LINK D 12 08 07
`}},77092,(e,t,i)=>{t.exports={maze:`# This file is used to declare a fractal maze. 
# You can copy it to create a new maze. To help
# you do so, each component of the maze is described
# before being added. You can also add your own
# commentaries by making a line that start with a #. 

# == SIERPINSKI == #
# Adapted from trivialknot's maze at https://skepticsplay.blogspot.com/2014/02/fractal-maze-2-sierpinski-paths.html

# COLORS
# Some global colors are set to personalize the maze. 
# For now, it is possible to set: 
# - The background color of the upmost level with OUTSIDE_COLOR;
# - The color of the walls with BACKGROUND_COLOR;
# - The color of the path on with PATH_COLOR;
# - The color of the line drawn when the player moves with LINE_COLOR.
# These colors must be set before declaring any component of the maze. 
# Format: COLOR_NAME #RRGGBB

OUTSIDE_COLOR #000000
BACKGROUND_COLOR #f8cf4a
PATH_COLOR #c65223
LINE_COLOR #1023c7

# SIZE DESCRIPTION
# It is possible to set the size of the tiles to adjust the rendering of the 
# maze. The tile's size must be set before declaring any component of the maze. 
# Format: TILE_SIZE size

TILE_SIZE 20

# TILE DESCRIPTION
# Tiles are the basic components of the maze, each row of the maze is described
# as a succession of tiles, each being a 4-bit number written on two digits. This 
# number indicates in which directions the tile can be entered or left by a natural
# path (that is, not by using a teleporter, an exit or a link), each bit indicating 
# if a path is set in a given direction. 
# Tiles must be declared before any other components of the maze. 
#
# ORIENTATION VALUES:
# 8 = 1000 = North
# 4 = 0100 = East
# 2 = 0010 = South
# 1 = 0001 = West
# Examples:   10 = 1010      => A tile with a vertical path.
#           0501 = 0101|0001 => Two tiles with an horizontal path that has no exit eastward. 

# ======== MAZE ======== #
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000000000000000000000000000000000000000000000000
000200020000000200000000000000000000000000000000
041100100000000800000000000000000000000000000000
001000100000000000000000000000000000000000000000
041301100403000000000200000000000000000000000000
000000100010000000001000000000000000000000000000
040505130110040505031401000000000000000000000000
000000000008000002080401000000000000000000000000
040505050505050110050501000000000000000000000000
000000000002000010040501000000000000000000000000
040505050110040511060501000000000000000000000000
000006050513050110080000000000000000000000000000
000008000000040509000000000000000000000000000000
# ====== END MAZE ====== #

# TELEPORT DESCRIPTION
# A teleporter allows the player to move in a direction while skipping a few tiles.
# This is useful e.g for drawing a path that goes under another one.
# Format: TELEPORT row col orientation+reach
# Example: TELEPORT 00 00 4+3 => Teleport from (0,0) to (0,3) (3 tiles east)

TELEPORT 15 02 4+2
TELEPORT 15 04 1+2
TELEPORT 17 04 4+2
TELEPORT 17 06 1+2
TELEPORT 18 08 4+2
TELEPORT 18 10 1+2
TELEPORT 17 10 2+2
TELEPORT 19 10 8+2
TELEPORT 18 05 2+2
TELEPORT 20 05 8+2
TELEPORT 18 09 2+2
TELEPORT 20 09 8+2
TELEPORT 19 07 4+2
TELEPORT 19 09 1+2
TELEPORT 21 04 4+2
TELEPORT 21 06 1+2
TELEPORT 22 07 4+2
TELEPORT 22 09 1+2

# PLAYER DESCRIPTION
# The player is the in-game avatar of the actual player. 
# The player must be declared before any trophy/exit.
# Format: PLAYER row col #RRGGBB

PLAYER 13 07 #101b7a

# TROPHY DESCRIPTION
# Trophies are an optional component of the maze. 
# Reaching a trophy wins the game. 
# Trophies can only be placed on the topmost level of the maze.
# If no trophies are set, reaching an exit on the topmost level
# of the maze wins the game. 
# When used, trophies must be declared before any exit.
# Format: TROPHY row col #RRGGBB

TROPHY 15 10 #6dc738

# EXIT DESCRIPTION
# An exit allows the player to move outside the block they are 
# currently in and to leave the maze if there is no trophies.
# Exits must be declared before any link can be made.
# Format: EXIT name orientation row col

EXIT 01 1 13 00
EXIT 02 1 15 00
EXIT 03 1 17 00
EXIT 04 1 19 00
EXIT 05 1 21 00
EXIT 06 2 23 02
EXIT 07 2 23 06

# BLOCK DESCRIPTION
# A block is a copy of the maze within itself.
# Blocks must be declared before any link is added to them.
# Format: BLOCK name row col width height #RRGGBB

BLOCK UP 00 00 12 12 #f8cf4a
BLOCK RIGHT 12 12 12 12 #f8cf4a

# LINK DESCRIPTION
# A link allows the player to move inside a block. 
# A link must be declared after the block it links to. 
# A link can also link to a block inside one block or more. 
# In that case, the chain of blocks must be entirely described,
# separated by '+'.
# Format: LINK block_name[+block_name[+block_name[+...]]] exit_name row col

LINK UP 06 12 01
LINK UP 07 12 03
LINK UP+RIGHT 07 12 07

LINK RIGHT 01 18 11
LINK RIGHT 02 19 11
LINK RIGHT 03 20 11
LINK RIGHT 04 21 11
LINK RIGHT+UP 05 17 11
`}},65213,(e,t,i)=>{t.exports={maze:`# This file is used to declare a fractal maze. 
# You can copy it to create a new maze. To help
# you do so, each component of the maze is described
# before being added. You can also add your own
# commentaries by making a line that start with a #. 

# == MICROCHIP == #
# Adapted from Mark J. P. Wolf's maze  (mark.wolf at cuw.edu) found at https://www.mathpuzzle.com/18Nov2003.html

# COLORS
# Some global colors are set to personalize the maze. 
# For now, it is possible to set: 
# - The background color of the upmost level with OUTSIDE_COLOR;
# - The color of the walls with BACKGROUND_COLOR;
# - The color of the path on with PATH_COLOR;
# - The color of the line drawn when the player moves with LINE_COLOR.
# These colors must be set before declaring any component of the maze. 
# Format: COLOR_NAME #RRGGBB

OUTSIDE_COLOR #63998b
BACKGROUND_COLOR #275d5c
PATH_COLOR #f0bd6a
LINE_COLOR #cd9a51

# SIZE DESCRIPTION
# It is possible to set the size of the tiles to adjust the rendering of the 
# maze. The tile's size must be set before declaring any component of the maze. 
# Format: TILE_SIZE size

TILE_SIZE 30

# TILE DESCRIPTION
# Tiles are the basic components of the maze, each row of the maze is described
# as a succession of tiles, each being a 4-bit number written on two digits. This 
# number indicates in which directions the tile can be entered or left by a natural
# path (that is, not by using a teleporter, an exit or a link), each bit indicating 
# if a path is set in a given direction. 
# Tiles must be declared before any other components of the maze. 
#
# ORIENTATION VALUES:
# 8 = 1000 = North
# 4 = 0100 = East
# 2 = 0010 = South
# 1 = 0001 = West
# Examples:   10 = 1010      => A tile with a vertical path.
#           0501 = 0101|0001 => Two tiles with an horizontal path that has no exit eastward. 

# =============== MAZE =============== #
0605010000000000000605050104050505010000
1000000000000605011004050505050505010000
1405050503001002001000000601060505050302
1000000008000808001000000800080403020810
1000060100000000040900020000000008100409
1000100000000000060505090000000000100200
1002100000000000100200020000000000081000
0810100000000000081000100000000004011000
0010100002000202001000100000000002021000
0010120108040910001401100605050509101000
0010060505010012011002101002000000101000
0010100002000000001010100812050100100800
0411100010000000001010100000000000140501
0010100012050100001008080000000004090200
0010100000040505011004010000000002001000
0010100000000000001004010000000008001000
0010100000000000000800040505010000001000
0010120505050505050505050705050505011000
0012050505050503000200001000000000060900
0000040505050108040900000800000000080000
# ============= END MAZE ============= #

# TELEPORT DESCRIPTION
# A teleporter allows the player to move in a direction while skipping a few tiles.
# This is useful e.g for drawing a path that goes under another one.
# Format: TELEPORT row col orientation+reach
# Example: TELEPORT 00 00 4+3 => Teleport from (0,0) to (0,3) (3 tiles east)

TELEPORT 00 07 2+2
TELEPORT 02 07 8+2

TELEPORT 01 08 4+2
TELEPORT 01 10 1+2

TELEPORT 00 13 2+2
TELEPORT 02 13 8+2

TELEPORT 01 17 2+2
TELEPORT 03 17 8+2

TELEPORT 04 16 4+2
TELEPORT 04 18 1+2

TELEPORT 03 18 2+2
TELEPORT 05 18 8+2

TELEPORT 04 09 2+2
TELEPORT 06 09 8+2

TELEPORT 06 01 4+2
TELEPORT 06 03 1+2

TELEPORT 06 16 2+2
TELEPORT 08 16 8+2

TELEPORT 06 17 2+2
TELEPORT 08 17 8+2

TELEPORT 07 17 4+2
TELEPORT 07 19 1+2

TELEPORT 09 03 4+2
TELEPORT 09 05 1+2

TELEPORT 08 05 2+2
TELEPORT 10 05 8+2

TELEPORT 09 10 4+2
TELEPORT 09 12 1+2

TELEPORT 08 13 2+2
TELEPORT 10 13 8+2

TELEPORT 09 04 2+2
TELEPORT 11 04 8+2

TELEPORT 10 08 4+2
TELEPORT 10 10 1+2

TELEPORT 11 18 2+2
TELEPORT 13 18 8+2

TELEPORT 14 08 4+2
TELEPORT 14 10 1+2

TELEPORT 13 10 2+2
TELEPORT 15 10 8+2

TELEPORT 14 11 2+2
TELEPORT 16 11 8+2

TELEPORT 17 00 4+2
TELEPORT 17 02 1+2

TELEPORT 16 09 2+2
TELEPORT 18 09 8+2

TELEPORT 17 17 4+2
TELEPORT 17 19 1+2

TELEPORT 19 06 4+2
TELEPORT 19 08 1+2

# PLAYER DESCRIPTION
# The player is the in-game avatar of the actual player.
# The player must be declared before any trophy/exit.
# Format: PLAYER row col #RRGGBB

PLAYER 13 06 #87632d

# TROPHY DESCRIPTION
# Trophies are an optional component of the maze. 
# Reaching a trophy wins the game. 
# Trophies can only be placed on the topmost level of the maze.
# If no trophies are set, reaching an exit on the topmost level
# of the maze wins the game. 
# When used, trophies must be declared before any exit.
# Format: TROPHY row col #RRGGBB

TROPHY 14 05 #42665c

# EXIT DESCRIPTION
# An exit allows the player to move outside the block they are 
# currently in and to leave the maze if there is no trophies.
# Exits must be declared before any link can be made.
# Format: EXIT name orientation row col

EXIT 01 8 00 02
EXIT 02 8 00 07
EXIT 03 8 00 12
EXIT 04 8 00 17
EXIT 05 4 02 19
EXIT 06 4 07 19
EXIT 07 4 12 19
EXIT 08 4 17 19
EXIT 09 2 19 17
EXIT 10 2 19 12
EXIT 11 2 19 07
EXIT 12 2 19 02
EXIT 13 1 17 00
EXIT 14 1 12 00
EXIT 15 1 07 00
EXIT 16 1 02 00

# BLOCK DESCRIPTION
# A block is a copy of the maze within itself.
# Blocks must be declared before any link is added to them.
# Format: BLOCK name row col width height #RRGGBB

BLOCK A 04 04 04 04 #7d0c6f
BLOCK B 04 12 04 04 #267d06
BLOCK C 12 12 04 04 #7d510c

# LINK DESCRIPTION
# A link allows the player to move inside a block. 
# A link must be declared after the block it links to. 
# A link can also link to a block inside one block or more. 
# In that case, the chain of blocks must be entirely described,
# separated by '+'.
# Format: LINK block_name[+block_name[+block_name[+...]]] exit_name row col

LINK A 01 03 04
LINK A 03 03 06
LINK A 04 03 07
LINK A 05 04 08
LINK A 08 07 08
LINK A 09 08 07
LINK A 10 08 06
LINK A 11 08 05
LINK A 12 08 04
LINK A 14 06 03
LINK A 16 04 03

LINK B 01 03 12
LINK B 03 03 14
LINK B 04 03 15
LINK B 07 06 16
LINK B 08 07 16
LINK B 11 08 13
LINK B 14 06 11
LINK B 16 04 11

LINK C 01 11 12
LINK C 04 11 15
LINK C 06 13 16
LINK C 07 14 16
LINK C 08 15 16
LINK C 10 16 14
LINK C 13 15 11
LINK C 15 13 11
`}},40993,(e,t,i)=>{t.exports={maze:`# This file is used to declare a fractal maze. 
# You can copy it to create a new maze. To help
# you do so, each component of the maze is described
# before being added. You can also add your own
# commentaries by making a line that start with a #. 

# == SQUARE == #
# Adapted from trivialknot's maze at https://skepticsplay.blogspot.com/2010/10/fractal-maze.html

# COLORS
# Some global colors are set to personalize the maze. 
# For now, it is possible to set: 
# - The background color of the upmost level with OUTSIDE_COLOR;
# - The color of the walls with BACKGROUND_COLOR;
# - The color of the path on with PATH_COLOR;
# - The color of the line drawn when the player moves with LINE_COLOR.
# These colors must be set before declaring any component of the maze. 
# Format: COLOR_NAME #RRGGBB

OUTSIDE_COLOR #000000
BACKGROUND_COLOR #151515
PATH_COLOR #feac16
LINE_COLOR #092fe8

# SIZE DESCRIPTION
# It is possible to set the size of the tiles to adjust the rendering of the 
# maze. The tile's size must be set before declaring any component of the maze. 
# Format: TILE_SIZE size

TILE_SIZE 30

# TILE DESCRIPTION
# Tiles are the basic components of the maze, each row of the maze is described
# as a succession of tiles, each being a 4-bit number written on two digits. This 
# number indicates in which directions the tile can be entered or left by a natural
# path (that is, not by using a teleporter, an exit or a link), each bit indicating 
# if a path is set in a given direction. 
# Tiles must be declared before any other components of the maze. 
#
# ORIENTATION VALUES:
# 8 = 1000 = North
# 4 = 0100 = East
# 2 = 0010 = South
# 1 = 0001 = West
# Examples:   10 = 1010      => A tile with a vertical path.
#           0501 = 0101|0001 => Two tiles with an horizontal path that has no exit eastward. 

# ============== MAZE ============== #
00060505050505050505010000000000000000
02100405050505050505050505050505050503
10100000000000000000020000000000000010
10080000000000000002100000000000000008
10000000000000000010100000000000000000
12010000000000000010100000000000000000
00000000000000000010100000000000000000
00000000000000000010100000000000000000
00000000000000000010120505050505050501
04030000000605050110040505050505050501
00100000001000000008000000000000000002
00100000001205050501000000000000000010
00100000000000000002000000000000000010
00100000000000000010000000000000000210
00100000000000000010000000000000000810
02100000000000000010000000000000000409
10100000000000000010000000000000000200
10120505050505050110040505010000001000
12050505050505050108040505050505050900
# ============ END MAZE ============ #

# TELEPORT DESCRIPTION
# A teleporter allows the player to move in a direction while skipping a few tiles.
# This is useful e.g for drawing a path that goes under another one.
# Format: TELEPORT row col orientation+reach
# Example: TELEPORT 00 00 4+3 => Teleport from (0,0) to (0,3) (3 tiles east)

TELEPORT 01 00 4+2
TELEPORT 01 02 1+2

TELEPORT 00 10 2+2
TELEPORT 02 10 8+2

TELEPORT 09 08 4+2
TELEPORT 09 10 1+2

TELEPORT 08 18 2+2
TELEPORT 10 18 8+2

TELEPORT 10 09 2+2
TELEPORT 12 09 8+2

TELEPORT 14 17 2+2
TELEPORT 16 17 8+2

TELEPORT 17 08 4+2
TELEPORT 17 10 1+2

TELEPORT 18 08 4+2
TELEPORT 18 10 1+2

# PLAYER DESCRIPTION
# The player is the in-game avatar of the actual player.
# The player must be declared before any trophy/exit.
# Format: PLAYER row col #RRGGBB

PLAYER 16 09 #177dff


# TROPHY DESCRIPTION
# Trophies are an optional component of the maze. 
# Reaching a trophy wins the game. 
# Trophies can only be placed on the topmost level of the maze.
# If no trophies are set, reaching an exit on the topmost level
# of the maze wins the game. 
# When used, trophies must be declared before any exit.
# Format: TROPHY row col #RRGGBB

TROPHY 01 09 #ff690a

# EXIT DESCRIPTION
# An exit allows the player to move outside the block they are 
# currently in and to leave the maze if there is no trophies.
# Exits must be declared before any link can be made.
# Format: EXIT name orientation row col

EXIT 01 4 03 18
EXIT 02 4 09 18
EXIT 03 4 15 18
EXIT 04 2 18 09
EXIT 05 1 15 00
EXIT 06 1 09 00
EXIT 07 1 03 00


# BLOCK DESCRIPTION
# A block is a copy of the maze within itself.
# Blocks must be declared before any link is added to them.
# Format: BLOCK name row col width height #RRGGBB

BLOCK A 02 02 07 07 #0070ff
BLOCK B 10 10 07 07 #9730ff


# LINK DESCRIPTION
# A link allows the player to move inside a block. 
# A link must be declared after the block it links to. 
# A link can also link to a block inside one block or more. 
# In that case, the chain of blocks must be entirely described,
# separated by '+'.
# Format: LINK block_name[+block_name[+block_name[+...]]] exit_name row col

LINK A 01 03 09
LINK A 04 09 05
LINK A 06 05 01
LINK A 07 03 01

LINK B 02 13 17
LINK B 03 15 17
LINK B 04 17 13
LINK B 05 15 09
LINK B 07 11 09
`}},31713,e=>{"use strict";var t=e.i(43476),i=e.i(71645);let o=(0,i.createContext)(void 0);function a({children:e}){let a=(0,i.useContext)(o);return a&&(0,t.jsxs)("section",{children:[!a.isWin&&(0,t.jsxs)("h1",{id:"hud",children:["Position: ",a.blockStack.join("←")]}),a.isWin&&(0,t.jsx)("h1",{id:"hud",children:"Congratulations, you escaped!"}),e]})}let l=(0,i.createContext)(void 0);function s({name:e}){let o=(0,i.useContext)(l);return o&&o.blocks[e]?(0,t.jsx)("div",{style:{backgroundColor:o.blocks[e].color,width:o.blocks[e].width*o.tile_size,height:o.blocks[e].height*o.tile_size,alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"row",position:"absolute",marginLeft:(o.blocks[e].col+1/4)*o.tile_size,marginTop:(o.blocks[e].row+1/4)*o.tile_size,zIndex:2},children:(0,t.jsx)("p",{children:e})}):(0,t.jsx)(t.Fragment,{})}function r(){let e=(0,i.useContext)(l),a=(0,i.useContext)(o);return e&&a?((0,i.useEffect)(()=>{a.setPlayerPos({row:e.player.row,col:e.player.col}),a.setBlockStack(["0"]),a.setIsWin(!1)},[e]),(0,i.useEffect)(()=>{let t=t=>{if(a.isWin)return;let i={ArrowLeft:{orientation:1,rowOffset:0,colOffset:-1},ArrowDown:{orientation:2,rowOffset:1,colOffset:0},ArrowRight:{orientation:4,rowOffset:0,colOffset:1},ArrowUp:{orientation:8,rowOffset:-1,colOffset:0}};if(t.key in i){let o=a.playerPos.row,l=a.playerPos.col,s=parseInt(e.rows[a.playerPos.row].slice(2*a.playerPos.col,2*a.playerPos.col+2));for(let[e,o]of Object.entries(i))if(t.key==e&&s&o.orientation)return void a.setPlayerPos(e=>({row:e.row+o.rowOffset,col:e.col+o.colOffset}));if(e.teleporters[o]&&e.teleporters[o][l]){let s=e.teleporters[o][l].signature;for(let[o,l]of Object.entries(i))if(t.key==o&&s&l.orientation)return void a.setPlayerPos(t=>{let i=t.row,o=t.col,a=l.orientation;return e.teleporters[i]&&e.teleporters[i][o]&&e.teleporters[i][o].reach[a]?{row:t.row+l.rowOffset*e.teleporters[i][o].reach[a],col:t.col+l.colOffset*e.teleporters[i][o].reach[a]}:t})}if(e.links[o]&&e.links[o][l])for(let s of e.links[o][l]){let o=e.exits[s.exit];for(let[e,l]of Object.entries(i))if(t.key==e&&o&&o.orientation==4*l.orientation%15){a.setBlockStack(e=>[...e,s.block]),a.setPlayerPos({row:o.row,col:o.col});return}}let r=a.blockStack.length>1?e.blocks[a.blockStack[a.blockStack.length-1]]:null;e:for(let[o,l]of Object.entries(e.exits))if(l&&l.row==a.playerPos.row&&l.col==a.playerPos.col){if(r&&r.exits[o]){for(let[e,s]of Object.entries(i))if(t.key==e&&l.orientation==s.orientation){a.setBlockStack(e=>e.slice(0,-1)),a.setPlayerPos({row:r.exits[o].row,col:r.exits[o].col});break e}}else if(null===r&&0==e.trophies.length){for(let[e,o]of Object.entries(i))if(t.key==e&&l.orientation==o.orientation){a.setPlayerPos(e=>({row:e.row+o.rowOffset,col:e.col+o.colOffset})),a.setIsWin(!0);break e}}}}};return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[e,a]),(0,t.jsx)("div",{className:"player",style:{position:"absolute",transform:"translate("+(a.playerPos.col+3/4-.125)*e.tile_size+"px, "+(a.playerPos.row+3/4-.125)*e.tile_size+"px)",background:e.player.color,width:.25*e.tile_size,height:.25*e.tile_size,borderRadius:.25*e.tile_size/2,zIndex:4,transition:"transform 0.1s linear"}})):(0,t.jsx)(t.Fragment,{})}function n(){let e=(0,i.useContext)(l),a=(0,i.useContext)(o),[s,r]=(0,i.useState)("white");return a&&e&&e.rows&&e.rows[0]?((0,i.useEffect)(()=>{if(a.blockStack.length>0){if("0"==a.blockStack[a.blockStack.length-1])r(e.outside_color);else for(let[t,i]of Object.entries(e.blocks))if(i&&t==a.blockStack[a.blockStack.length-1]){r(i.color);break}}},[a]),(0,t.jsx)("div",{style:{position:"absolute",border:e.tile_size/4+"px solid "+s,width:e.tile_size*(e.rows[0].length/2+.5),height:e.tile_size*(e.rows.length+.5),zIndex:2}})):(0,t.jsx)(t.Fragment,{})}function c({row:e,col:a}){let s=(0,i.useContext)(l),r=(0,i.useContext)(o);if(s&&r){let[o,l]=(0,i.useState)(!1),[n,c]=(0,i.useState)({row:0,col:0}),[h,T]=(0,i.useState)(!1),[d,m]=(0,i.useState)(!1),[p,E]=(0,i.useState)(!1),[f,b]=(0,i.useState)(!1),[u,g]=(0,i.useState)("0"),[L,I]=(0,i.useState)({});(0,i.useEffect)(()=>{g("0"),I({0:{w:!1,s:!1,e:!1,n:!1}})},[s]);let O=parseInt(s.rows[e].slice(2*a,2*a+2)),_=s.teleporters[e]&&s.teleporters[e][a]?s.teleporters[e][a]:{signature:0,reach:{}},z=0;s.links[e]&&s.links[e][a]&&s.links[e][a].forEach(e=>{let t=s.exits[e.exit]?.orientation;1==t?z|=4:2==t?z|=8:4==t?z|=1:8==t&&(z|=2)});let R=0;for(let[t,i]of Object.entries(s.exits)){let o=r.blockStack.length,l=r.blockStack[o-1];(1==o&&0==s.trophies.length||o>1&&s.blocks[l]&&s.blocks[l].exits[t])&&i&&i.row==e&&i.col==a&&(R|=i.orientation)}let w=s.player.row==e&&s.player.col==a,k=!1;for(let t of s.trophies)if(t.row==e&&t.col==a){k=!0;break}let P=(0,t.jsx)("div",{style:{background:s.path_color,width:s.tile_size/4,height:s.tile_size/2,position:"absolute",marginLeft:0,marginTop:1/4*s.tile_size}}),x=(0,t.jsx)("div",{style:{background:s.path_color,width:s.tile_size/2,height:s.tile_size/4,position:"absolute",marginLeft:s.tile_size/4,marginTop:3/4*s.tile_size}}),y=(0,t.jsx)("div",{style:{background:s.path_color,width:s.tile_size/4,height:s.tile_size/2,position:"absolute",marginLeft:3/4*s.tile_size,marginTop:1/4*s.tile_size}}),N=(0,t.jsx)("div",{style:{background:s.path_color,width:s.tile_size/2,height:s.tile_size/4,position:"absolute",marginLeft:s.tile_size/4,marginTop:0}}),C=(0,t.jsx)("div",{style:{background:"linear-gradient(to left, "+s.path_color+", oklch(from "+s.path_color+" clamp(0, l - 0.2, 1) c h))",width:s.tile_size/2,height:s.tile_size/2,position:"absolute",marginLeft:-s.tile_size/4,marginTop:s.tile_size/4,zIndex:2}}),A=(0,t.jsx)("div",{style:{background:"linear-gradient(to bottom, "+s.path_color+", oklch(from "+s.path_color+" clamp(0, l - 0.2, 1) c h))",width:s.tile_size/2,height:s.tile_size/2,position:"absolute",marginLeft:s.tile_size/4,marginTop:3/4*s.tile_size,zIndex:2}}),K=(0,t.jsx)("div",{style:{background:"linear-gradient(to right, "+s.path_color+", oklch(from "+s.path_color+" clamp(0, l - 0.2, 1) c h))",width:s.tile_size/2,height:s.tile_size/2,position:"absolute",marginLeft:3/4*s.tile_size,marginTop:s.tile_size/4,zIndex:2}}),S=(0,t.jsx)("div",{style:{background:"linear-gradient(to top, "+s.path_color+", oklch(from "+s.path_color+" clamp(0, l - 0.2, 1) c h))",width:s.tile_size/2,height:s.tile_size/2,position:"absolute",marginLeft:s.tile_size/4,marginTop:-s.tile_size/4,zIndex:2}}),v=(0,t.jsx)("div",{style:{background:"linear-gradient(to left, "+s.path_color+", rgb(from "+s.path_color+" r g b / 0))",width:s.tile_size/2,height:s.tile_size/2,position:"absolute",marginLeft:-s.tile_size/4,marginTop:s.tile_size/4,zIndex:2}}),B=(0,t.jsx)("div",{style:{background:"linear-gradient(to bottom, "+s.path_color+", rgb(from "+s.path_color+" r g b / 0))",width:s.tile_size/2,height:s.tile_size/2,position:"absolute",marginLeft:s.tile_size/4,marginTop:3/4*s.tile_size,zIndex:2}}),j=(0,t.jsx)("div",{style:{background:"linear-gradient(to right, "+s.path_color+", rgb(from "+s.path_color+" r g b / 0))",width:s.tile_size/2,height:s.tile_size/2,position:"absolute",marginLeft:3/4*s.tile_size,marginTop:s.tile_size/4,zIndex:2}}),D=(0,t.jsx)("div",{style:{background:"linear-gradient(to top, "+s.path_color+", rgb(from "+s.path_color+" r g b / 0))",width:s.tile_size/2,height:s.tile_size/2,position:"absolute",marginLeft:s.tile_size/4,marginTop:-s.tile_size/4,zIndex:2}}),X=(0,t.jsx)("div",{style:{background:s.path_color,width:s.tile_size/2,height:s.tile_size/2,position:"absolute",marginLeft:-s.tile_size/4,marginTop:s.tile_size/4,zIndex:2}}),F=(0,t.jsx)("div",{style:{background:s.path_color,width:s.tile_size/2,height:s.tile_size/2,position:"absolute",marginLeft:s.tile_size/4,marginTop:3/4*s.tile_size,zIndex:2}}),G=(0,t.jsx)("div",{style:{background:s.path_color,width:s.tile_size/2,height:s.tile_size/2,position:"absolute",marginLeft:3/4*s.tile_size,marginTop:s.tile_size/4,zIndex:2}}),Y=(0,t.jsx)("div",{style:{background:s.path_color,width:s.tile_size/2,height:s.tile_size/2,position:"absolute",marginLeft:s.tile_size/4,marginTop:-s.tile_size/4,zIndex:2}}),H=(0,t.jsx)("div",{style:{background:s.path_color,width:s.tile_size/2,height:s.tile_size/2,position:"absolute",marginLeft:s.tile_size/4,marginTop:s.tile_size/4}}),U=(0,t.jsx)("div",{style:{background:s.path_color,width:+s.tile_size,height:+s.tile_size,position:"absolute",borderRadius:s.tile_size/2,marginLeft:0*s.tile_size/2,marginTop:0*s.tile_size/2}}),Z=(0,t.jsx)("div",{style:{background:s.line_color,width:s.tile_size/2,height:1,position:"absolute",marginLeft:0,marginTop:s.tile_size/2,zIndex:3}}),W=(0,t.jsx)("div",{style:{background:s.line_color,width:1,height:s.tile_size/2,position:"absolute",marginLeft:s.tile_size/2,marginTop:s.tile_size/2,zIndex:3}}),M=(0,t.jsx)("div",{style:{background:s.line_color,width:s.tile_size/2,height:1,position:"absolute",marginLeft:s.tile_size/2,marginTop:s.tile_size/2,zIndex:3}}),V=(0,t.jsx)("div",{style:{background:s.line_color,width:1,height:s.tile_size/2,position:"absolute",marginLeft:s.tile_size/2,marginTop:0,zIndex:3}}),q=(0,t.jsx)("div",{style:{background:"linear-gradient(to left, "+s.line_color+", oklch(from "+s.line_color+" clamp(0, l - 0.2, 1) c h))",width:3*s.tile_size/4,height:1,position:"absolute",marginLeft:-s.tile_size/4,marginTop:s.tile_size/2,zIndex:3}}),J=(0,t.jsx)("div",{style:{background:"linear-gradient(to bottom, "+s.line_color+", oklch(from "+s.line_color+" clamp(0, l - 0.2, 1) c h))",width:1,height:3*s.tile_size/4,position:"absolute",marginLeft:s.tile_size/2,marginTop:s.tile_size/2,zIndex:3}}),Q=(0,t.jsx)("div",{style:{background:"linear-gradient(to right, "+s.line_color+", oklch(from "+s.line_color+" clamp(0, l - 0.2, 1) c h))",width:3*s.tile_size/4,height:1,position:"absolute",marginLeft:s.tile_size/2,marginTop:s.tile_size/2,zIndex:3}}),$=(0,t.jsx)("div",{style:{background:"linear-gradient(to top, "+s.line_color+", oklch(from "+s.line_color+" clamp(0, l - 0.2, 1) c h))",width:1,height:3*s.tile_size/4,position:"absolute",marginLeft:s.tile_size/2,marginTop:-s.tile_size/4,zIndex:3}}),ee=(0,t.jsx)("div",{style:{background:"linear-gradient(to left, "+s.line_color+", rgb(from "+s.line_color+" r g b / 0))",width:3*s.tile_size/4,height:1,position:"absolute",marginLeft:-s.tile_size/4,marginTop:s.tile_size/2,zIndex:3}}),et=(0,t.jsx)("div",{style:{background:"linear-gradient(to bottom, "+s.line_color+", rgb(from "+s.line_color+" r g b / 0))",width:1,height:3*s.tile_size/4,position:"absolute",marginLeft:s.tile_size/2,marginTop:s.tile_size/2,zIndex:3}}),ei=(0,t.jsx)("div",{style:{background:"linear-gradient(to right, "+s.line_color+", rgb(from "+s.line_color+" r g b / 0))",width:3*s.tile_size/4,height:1,position:"absolute",marginLeft:s.tile_size/2,marginTop:s.tile_size/2,zIndex:3}}),eo=(0,t.jsx)("div",{style:{background:"linear-gradient(to top, "+s.line_color+", rgb(from "+s.line_color+" r g b / 0))",width:1,height:3*s.tile_size/4,position:"absolute",marginLeft:s.tile_size/2,marginTop:-s.tile_size/4,zIndex:3}}),ea=(0,t.jsx)("div",{style:{background:s.line_color,width:3*s.tile_size/4,height:1,position:"absolute",marginLeft:-s.tile_size/4,marginTop:s.tile_size/2,zIndex:3}}),el=(0,t.jsx)("div",{style:{background:s.line_color,width:1,height:3*s.tile_size/4,position:"absolute",marginLeft:s.tile_size/2,marginTop:s.tile_size/2,zIndex:3}}),es=(0,t.jsx)("div",{style:{background:s.line_color,width:3*s.tile_size/4,height:1,position:"absolute",marginLeft:s.tile_size/2,marginTop:s.tile_size/2,zIndex:3}}),er=(0,t.jsx)("div",{style:{background:s.line_color,width:1,height:3*s.tile_size/4,position:"absolute",marginLeft:s.tile_size/2,marginTop:-s.tile_size/4,zIndex:3}}),en=(1&O)!=0?Z:(1&_.signature)!=0?q:(1&z)!=0?ee:(1&R)!=0?ea:null,ec=(2&O)!=0?W:(2&_.signature)!=0?J:(2&z)!=0?et:(2&R)!=0?el:null,eh=(4&O)!=0?M:(4&_.signature)!=0?Q:(4&z)!=0?ei:(4&R)!=0?es:null,eT=(8&O)!=0?V:(8&_.signature)!=0?$:(8&z)!=0?eo:(8&R)!=0?er:null,ed=(1&O)!=0?P:(1&_.signature)!=0?C:(1&z)!=0?v:(1&R)!=0?X:null,em=(2&O)!=0?x:(2&_.signature)!=0?A:(2&z)!=0?B:(2&R)!=0?F:null,ep=(4&O)!=0?y:(4&_.signature)!=0?K:(4&z)!=0?j:(4&R)!=0?G:null,eE=(8&O)!=0?N:(8&_.signature)!=0?S:(8&z)!=0?D:(8&R)!=0?Y:null;return(0,i.useEffect)(()=>{if(o||r.playerPos.row==e&&r.playerPos.col==a){if(r.playerPos.row==e&&r.playerPos.col==a&&k&&1==r.blockStack.length)return void r.setIsWin(!0);let t=o?r.playerPos.row:n.row,i=o?r.playerPos.col:n.col;if(t-e==0&&i-a==-(_.reach[1]&&(1&_.signature)!=0?_.reach[1]:1))T(e=>!e);else if(t-e==(_.reach[2]&&(2&_.signature)!=0?_.reach[2]:1)&&i-a==0)m(e=>!e);else if(t-e==0&&i-a==(_.reach[4]&&(4&_.signature)!=0?_.reach[4]:1))E(e=>!e);else if(t-e==-(_.reach[8]&&(8&_.signature)!=0?_.reach[8]:1)&&i-a==0)b(e=>!e);else if(o&&s.links[t]&&s.links[t][i]){for(let{exit:o}of s.links[t][i])if(s.exits[o]){let t=s.exits[o].row,i=s.exits[o].col;if(t==e&&i==a){if(1==s.exits[o].orientation){T(e=>!e);break}else if(2==s.exits[o].orientation){m(e=>!e);break}else if(4==s.exits[o].orientation){E(e=>!e);break}else if(8==s.exits[o].orientation){b(e=>!e);break}}}}if(o&&s.links[e]&&s.links[e][a]){for(let{exit:o}of s.links[e][a])if(s.exits[o]){let e=s.exits[o].row,a=s.exits[o].col;if(e==t&&a==i){if(4==s.exits[o].orientation){T(e=>!e);break}else if(8==s.exits[o].orientation){m(e=>!e);break}else if(1==s.exits[o].orientation){E(e=>!e);break}else if(2==s.exits[o].orientation){b(e=>!e);break}}}}}c(r.playerPos),l(r.playerPos.row==e&&r.playerPos.col==a)},[r.playerPos]),(0,i.useEffect)(()=>{I(e=>(e[u]={w:h,s:d,e:p,n:f},e))},[h,d,p,f]),(0,i.useEffect)(()=>{setTimeout(()=>{let t=r.blockStack.join(".");if(T(!!L[t]&&L[t].w),m(!!L[t]&&L[t].s),E(!!L[t]&&L[t].e),b(!!L[t]&&L[t].n),g(t),r.playerPos.row==e&&r.playerPos.col==a){let t=n.row,i=n.col;if(s.links[t]&&s.links[t][i]){for(let{exit:o}of s.links[t][i])if(s.exits[o]){let t=s.exits[o].row,i=s.exits[o].col;if(t==e&&i==a){if(1==s.exits[o].orientation){T(e=>!e);break}else if(2==s.exits[o].orientation){m(e=>!e);break}else if(4==s.exits[o].orientation){E(e=>!e);break}else if(8==s.exits[o].orientation){b(e=>!e);break}}}}if(s.links[e]&&s.links[e][a]){for(let{exit:o}of s.links[e][a])if(s.exits[o]){let e=s.exits[o].row,a=s.exits[o].col;if(e==t&&a==i){if(4==s.exits[o].orientation){T(e=>!e);break}else if(8==s.exits[o].orientation){m(e=>!e);break}else if(1==s.exits[o].orientation){E(e=>!e);break}else if(2==s.exits[o].orientation){b(e=>!e);break}}}}}},100)},[r.blockStack]),(0,t.jsxs)("div",{style:{position:"absolute",marginLeft:(a+1/4)*s.tile_size,marginTop:(e+1/4)*s.tile_size,background:s.background_color,width:s.tile_size,height:s.tile_size},children:[null!==ed&&ed,null!==em&&em,null!==ep&&ep,null!==eE&&eE,((O|_.signature|z|R)&15)!=0&&H,(w||k)&&U,h&&en,d&&ec,p&&eh,f&&eT]})}return(0,t.jsx)(t.Fragment,{})}function h({id:e}){let a=(0,i.useContext)(l),s=(0,i.useContext)(o);if(a&&s){let i=a.trophies[e];if(1==s.blockStack.length)return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{position:"absolute",marginLeft:(i.col+3/4-.4)*a.tile_size,marginTop:(i.row+3/4-.2)*a.tile_size,border:"1px solid "+i.color,width:.8*a.tile_size,height:.8*a.tile_size/2,borderRadius:.8*a.tile_size/2,zIndex:4,animation:"0.75s infinite trophy_1",animationTimingFunction:"linear"}}),(0,t.jsx)("div",{style:{position:"absolute",marginLeft:(i.col+3/4-.4)*a.tile_size,marginTop:(i.row+3/4-.2)*a.tile_size,border:"1px solid "+i.color,width:.8*a.tile_size,height:.8*a.tile_size/2,borderRadius:.8*a.tile_size/2,zIndex:4,animation:"0.75s infinite trophy_2",animationTimingFunction:"linear"}}),(0,t.jsx)("div",{style:{position:"absolute",marginLeft:(i.col+3/4-.4)*a.tile_size,marginTop:(i.row+3/4-.2)*a.tile_size,border:"1px solid "+i.color,width:.8*a.tile_size,height:.8*a.tile_size/2,borderRadius:.8*a.tile_size/2,zIndex:4,animation:"0.75s infinite trophy_3",animationTimingFunction:"linear"}}),(0,t.jsx)("div",{style:{position:"absolute",marginLeft:(i.col+3/4-.4)*a.tile_size,marginTop:(i.row+3/4-.2)*a.tile_size,border:"1px solid "+i.color,width:.8*a.tile_size,height:.8*a.tile_size/2,borderRadius:.8*a.tile_size/2,zIndex:4,animation:"0.75s infinite trophy_4",animationTimingFunction:"linear"}})]})}return(0,t.jsx)(t.Fragment,{})}function T({name:o}){let[a,T]=(0,i.useState)(void 0);return((0,i.useEffect)(()=>{T(function(t){try{let i=e.f({"./mazes/1_-_alice_in_wonderland.js":{id:()=>45243,module:()=>e.r(45243)},"./mazes/2_-_sierpinski.js":{id:()=>77092,module:()=>e.r(77092)},"./mazes/3_-_microchip.js":{id:()=>65213,module:()=>e.r(65213)},"./mazes/4_-_square.js":{id:()=>40993,module:()=>e.r(40993)}})("./mazes/"+t+".js").maze,o=0,a="white",l="white",s="white",r="white",n={},c={},h={},T={},d={row:0,col:0,color:""},m=[],p=[];for(let e of i.split("\n"))if(e=e.trim(),""!=e&&"#"!=e[0]){if("TILE_SIZE"==e.slice(0,9)){o=parseInt(e.split(" ")[1]);continue}if("OUTSIDE_COLOR"==e.slice(0,13)){a=e.split(" ")[1];continue}if("BACKGROUND_COLOR"==e.slice(0,16)){l=e.split(" ")[1];continue}if("PATH_COLOR"==e.slice(0,10)){s=e.split(" ")[1];continue}if("LINE_COLOR"==e.slice(0,10)){r=e.split(" ")[1];continue}if("TELEPORT"==e.slice(0,8)){let t=e.split(" "),i=t[3].split("+"),o=parseInt(t[1]),a=parseInt(t[2]);o in n||(n[o]={}),!n[o]||a in n[o]||(n[o][a]={signature:0,reach:{}}),n[o]&&n[o][a]&&(n[o][a].signature+=parseInt(i[0]),n[o][a].reach[parseInt(i[0])]=parseInt(i[1]));continue}if("BLOCK"==e.slice(0,5)){let t=e.split(" ");c[t[1]]={row:parseInt(t[2]),col:parseInt(t[3]),width:parseInt(t[4]),height:parseInt(t[5]),color:t[6],exits:{}};continue}if("LINK"==e.slice(0,4)){let t=e.split(" "),i=parseInt(t[3]),o=parseInt(t[4]);if(i in h||(h[i]={}),!h[i]||o in h[i]||(h[i][o]=[]),h[i]&&h[i][o]){h[i][o].push({block:t[1],exit:t[2]});let e=t[1];c[e]&&(c[e].exits[t[2]]={row:i,col:o});continue}}if("EXIT"==e.slice(0,4)){let t=e.split(" ");T[t[1]]={orientation:parseInt(t[2]),row:parseInt(t[3]),col:parseInt(t[4])};continue}if("PLAYER"==e.slice(0,6)){let t=e.split(" ");d={row:parseInt(t[1]),col:parseInt(t[2]),color:t[3]};continue}if("TROPHY"==e.slice(0,6)){let t=e.split(" ");m.push({row:parseInt(t[1]),col:parseInt(t[2]),color:t[3]});continue}p.push(e)}return{tile_size:o,outside_color:a,background_color:l,path_color:s,line_color:r,teleporters:n,blocks:c,links:h,exits:T,player:d,trophies:m,rows:p}}catch(e){return alert(e),{tile_size:0,outside_color:"",background_color:"",path_color:"",line_color:"",teleporters:{},blocks:{},links:{},exits:{},player:{row:0,col:0,color:""},trophies:[],rows:[]}}}(o.toLowerCase().replaceAll(" ","_")))},[o]),a)?(0,t.jsx)(l,{value:a,children:(0,t.jsxs)("div",{className:"maze",children:[(0,t.jsx)(n,{}),Object.keys(a.blocks).map(e=>(0,t.jsx)(s,{name:e},e)),(0,t.jsx)(r,{}),a.trophies.map((e,i)=>(0,t.jsx)(h,{id:i},i)),a.rows.map((e,i)=>e.match(/.{2}/g)?.map((e,o)=>(0,t.jsx)(c,{row:i,col:o},i.toString()+"."+o.toString())))]})}):(0,t.jsx)(t.Fragment,{})}function d({onChange:o}){let[a,l]=(0,i.useState)([]);return(0,i.useEffect)(()=>{l(e.r(32150).mazes)},[]),(0,i.useEffect)(()=>{a.length>0&&o(a[0])},[a]),(0,t.jsx)("section",{children:(0,t.jsx)("select",{name:"level_select",id:"level_select",onChange:e=>o(e.target.value),children:a.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})})}function m(){let[e,l]=(0,i.useState)(""),[s,r]=(0,i.useState)(["0"]),[n,c]=(0,i.useState)({row:0,col:0}),[h,m]=(0,i.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{onChange:e=>l(e)}),(0,t.jsx)(o,{value:{blockStack:s,setBlockStack:r,playerPos:n,setPlayerPos:c,isWin:h,setIsWin:m},children:(0,t.jsx)(a,{children:""!==e&&(0,t.jsx)(T,{name:e})})})]})}e.s(["default",()=>m],31713)}]);