/*
  fTelnet: An HTML5 WebSocket client
  Copyright (C) 2009-2013  Rick Parrish, R&M Software

  This file is part of fTelnet.

  fTelnet is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as
  published by the Free Software Foundation, either version 3 of the
  License, or any later version.

  fTelnet is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with fTelnet.  If not, see <http://www.gnu.org/licenses/>.
*/
class FillSettings {
    public Colour: number = 15;
    public Pattern: boolean[][] = [];
    public Style: number = FillStyle.Solid;

    constructor() {
        // Set default pattern
        for (var y: number = 0; y < 8; y++) {
            this.Pattern[y] = [];
            for (var x: number = 0; x < 8; x++) {
                this.Pattern[y][x] = true;
            }
        }
    }
}
