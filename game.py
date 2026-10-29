#!/usr/bin/env python3
"""
Aether Snake - A text-based adventure game.
"""

import sys
from typing import Dict, List, Tuple

class Game:
    def __init__(self):
        self.player_name = ""
        self.health = 100
        self.inventory: List[str] = []
        self.location = "forest_entrance"
        self.game_over = False

        self.locations = {
            "forest_entrance": {
                "description": "You stand at the edge of a dense, misty forest. Ancient trees tower above you.",
                "exits": {"north": "forest_center", "east": "clearing"},
                "items": ["torch"],
            },
            "forest_center": {
                "description": "Deep in the forest. The air is thick with magic. A faint glow emanates from ahead.",
                "exits": {"south": "forest_entrance", "north": "aether_shrine"},
                "items": ["crystal"],
            },
            "aether_shrine": {
                "description": "A shrine glowing with ethereal light. A serpent made of pure aether guards the entrance.",
                "exits": {"south": "forest_center"},
                "items": ["aether_gem"],
            },
            "clearing": {
                "description": "A peaceful clearing with wildflowers. A spring bubbles nearby.",
                "exits": {"west": "forest_entrance", "north": "ruins"},
                "items": ["water_jug"],
            },
            "ruins": {
                "description": "Ancient ruins covered in moss. Inscriptions glow faintly on the stone.",
                "exits": {"south": "clearing"},
                "items": ["ancient_key"],
            },
        }

    def start(self):
        """Start the game."""
        print("\n" + "="*50)
        print("WELCOME TO AETHER SNAKE")
        print("="*50)
        print("\nA text-based adventure awaits...\n")

        self.player_name = input("What is your name, traveler? ").strip()
        if not self.player_name:
            self.player_name = "Adventurer"

        print(f"\nWelcome, {self.player_name}!")
        print("Type 'help' for commands.\n")
        self.play()

    def show_location(self):
        """Display current location info."""
        loc = self.locations[self.location]
        print(f"\n[{self.location.upper()}]")
        print(f"{loc['description']}")

        if loc["items"]:
            print(f"Items: {', '.join(loc['items'])}")

        exits = ", ".join(loc["exits"].keys())
        print(f"Exits: {exits}")

    def move(self, direction: str):
        """Move in a direction."""
        if direction not in self.locations[self.location]["exits"]:
            print(f"You can't go {direction} from here.")
            return

        next_location = self.locations[self.location]["exits"][direction]
        self.location = next_location
        self.show_location()

    def take(self, item: str):
        """Pick up an item."""
        if item not in self.locations[self.location]["items"]:
            print(f"'{item}' is not here.")
            return

        self.inventory.append(item)
        self.locations[self.location]["items"].remove(item)
        print(f"You took the {item}.")

    def show_inventory(self):
        """Display inventory."""
        if not self.inventory:
            print("Your inventory is empty.")
        else:
            print(f"Inventory: {', '.join(self.inventory)}")

    def show_help(self):
        """Display help."""
        print("\nCOMMANDS:")
        print("  go <direction>  - Move (north, south, east, west)")
        print("  take <item>     - Pick up an item")
        print("  inventory       - Check your inventory")
        print("  look            - Describe current location")
        print("  help            - Show this help")
        print("  quit            - Exit game")

    def play(self):
        """Main game loop."""
        self.show_location()

        while not self.game_over:
            try:
                cmd = input("\n> ").strip().lower().split(maxsplit=1)

                if not cmd:
                    continue

                action = cmd[0]
                arg = cmd[1] if len(cmd) > 1 else ""

                if action == "quit":
                    print("Thanks for playing!")
                    self.game_over = True
                elif action == "help":
                    self.show_help()
                elif action == "look":
                    self.show_location()
                elif action == "inventory":
                    self.show_inventory()
                elif action == "go":
                    if arg:
                        self.move(arg)
                    else:
                        print("Go where? Specify a direction.")
                elif action == "take":
                    if arg:
                        self.take(arg)
                    else:
                        print("Take what? Specify an item.")
                else:
                    print("Unknown command. Type 'help' for options.")

            except KeyboardInterrupt:
                print("\n\nGame interrupted.")
                self.game_over = True
            except Exception as e:
                print(f"Error: {e}")

def main():
    game = Game()
    game.start()

if __name__ == "__main__":
    main()
