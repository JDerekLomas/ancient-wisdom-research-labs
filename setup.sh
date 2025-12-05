#!/bin/bash

# Latin Master Bibliography Setup Script
# This script sets up the environment and dependencies

echo "Latin Master Bibliography Setup"
echo "================================"

# Check if Python 3 is available
if ! command -v python3 &> /dev/null; then
    echo "Error: Python 3 is required but not installed."
    exit 1
fi

echo "✓ Python 3 found: $(python3 --version)"

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
    echo "✓ Virtual environment created"
else
    echo "✓ Virtual environment already exists"
fi

# Activate virtual environment
echo "Activating virtual environment..."
source venv/bin/activate

# Install core dependencies
echo "Installing core dependencies..."
pip install -r requirements_core.txt

echo "✓ Core dependencies installed"

# Create necessary directories
echo "Creating project directories..."
mkdir -p data/raw/{ustc,vd16,vd17,vd18,estc,other}
mkdir -p data/processed/{intermediate,final}

echo "✓ Directories created"

# Make scripts executable
chmod +x run_pipeline.py
echo "✓ Scripts made executable"

# Run initial test
echo "Running initial test..."
python test_pipeline.py

echo ""
echo "Setup complete!"
echo ""
echo "To run the pipeline:"
echo "  1. Activate environment: source venv/bin/activate"
echo "  2. Run pipeline: python run_pipeline.py"
echo "  3. For limited testing: python run_pipeline.py --max-records 10"
echo ""
echo "Data will be saved to: data/processed/final/latin_master_bibliography.csv"