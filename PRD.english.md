# **Product Requirements Document: Love is Written in the Necronomicon**

This document outlines the functional requirements for the web-based visual novel game "Love is Written in the Necronomicon", which combines elements of dating simulation, horror, and escape room gameplay.

| Requirement ID | Description               | User Story                                                                                                | Expected Behavior/Outcome                                                                                                                                                              |
| -------------- | ------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Core Visual Novel** |                           |                                                                                                           |                                                                                                                                                                                        |
| VN001          | Title Screen Display      | As a player, I want to see the main title screen when starting the game so I can navigate the main menu.    | The system should display the game title, background image, and menu buttons (New Game, Load Game, Settings, Exit).                                                                    |
| VN002          | Dialogue Presentation     | As a player, I want to read the story and character dialogues clearly presented on screen.                | The system should display background images, character sprites (when applicable), a dialogue box with speaker name (optional) and text content. Clicking advances the dialogue.           |
| VN003          | Choice Mechanism          | As a player, I want to make choices during the dialogue that impact the story progression or relationships. | The system should display clickable choice buttons when a decision point is reached. Selecting a choice should trigger corresponding story branches or variable changes (e.g., affection). |
| VN004          | Affection System          | As a player, I want my choices to affect my relationship with the heroines.                               | The system should track hidden affection points for each main heroine based on player choices. These points will influence story routes and endings.                                        |
| VN005          | Save/Load Functionality   | As a player, I want to be able to save my progress at any point and load it later.                        | The system should provide multiple save slots. Saving captures the current scene, variables, affection levels, and inventory. Loading restores the game state from a selected file.    |
| VN006          | Background & Sprites      | As a player, I want to see appropriate visuals (backgrounds, character sprites) matching the scene.       | The system should display the correct background image and character sprites according to the current story scene definition. Smooth transitions between visuals are desirable.       |
| VN007          | Settings Menu             | As a player, I want to adjust basic game settings like text speed and volume.                             | The system should provide a settings menu accessible from the title screen and potentially during gameplay, offering options for text speed, BGM volume, and SFX volume control.         |
| **Escape Room Elements** |                           |                                                                                                           |                                                                                                                                                                                        |
| ES001          | Environment Interaction   | As a player, I want to investigate specific areas or objects in the environment during escape sequences.    | The system should allow clicking on predefined interactive zones/objects within the background image. Clicking triggers descriptive text, item acquisition, or puzzle interfaces.     |
| ES002          | Inventory System          | As a player, I want to view and manage items I have collected during the game.                            | The system should provide an accessible inventory UI displaying icons/names of collected items. It might allow examining items for details or selecting them for use.               |
| ES003          | Puzzle Solving            | As a player, I want to solve puzzles using clues found and items collected to progress the story.           | The system should implement various puzzle mechanics (e.g., item combination, code entry, sequence matching). Solving a puzzle successfully unlocks the next part of the story or area. |
| **Horror Elements** |                           |                                                                                                           |                                                                                                                                                                                        |
| HO001          | Atmospheric Horror        | As a player, I want to experience a sense of dread and suspense through visuals and audio.                | The system should utilize unsettling background music, ambient sounds, occasional visual distortions, and descriptive text to build a horror atmosphere during specific scenes.        |
| HO002          | Psychological Horror      | As a player, I want the horror elements to affect me psychologically based on the narrative and choices.    | The system should present disturbing themes, unreliable narration (potentially), and choices with significant consequences that contribute to psychological tension.                 |
| HO003          | Jump Scares (Optional)    | As a player, I might encounter sudden startling events (use sparingly).                                   | The system could implement occasional, well-placed jump scares using sudden sounds or visual changes, but they should be used judiciously to avoid overuse.                           |
| **Ending System** |                           |                                                                                                           |                                                                                                                                                                                        |
| EN001          | Multiple Endings          | As a player, I want my actions and choices throughout the game to lead to different conclusions.          | The system should trigger different ending scenarios (e.g., Good Endings per heroine, Normal Ending, Bad Endings, True Ending) based on accumulated affection points and critical flags. |

## Checklist

- [ ] VN001: Title Screen Display
- [ ] VN002: Dialogue Presentation
- [ ] VN003: Choice Mechanism
- [ ] VN004: Affection System
- [ ] VN005: Save/Load Functionality
- [ ] VN006: Background & Sprites
- [ ] VN007: Settings Menu
- [ ] ES001: Environment Interaction
- [ ] ES002: Inventory System
- [ ] ES003: Puzzle Solving
- [ ] HO001: Atmospheric Horror
- [ ] HO002: Psychological Horror
- [ ] HO003: Jump Scares (Optional)
- [ ] EN001: Multiple Endings 