from textgenrnn import textgenrnn
textgen = textgenrnn()
textgen.generate()
textgen.train_from_file('Romeo_and_Juliet.txt',num_epochs=2)
deku = textgen.generate()
