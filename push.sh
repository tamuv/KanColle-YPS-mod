#!/bin/bash
git push
git push origin $(git tag -l --contains master)
cd gh-pages && git push
