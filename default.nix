{ nixpkgs ? import <nixpkgs> {  } }:

let
  pkgs = [
    nixpkgs.nodejs
  ];

in
  nixpkgs.stdenv.mkDerivation {
    name = "fable-dev";
    buildInputs = pkgs;
  }
