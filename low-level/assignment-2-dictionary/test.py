import unittest
import subprocess

#all_inputs = ["test", "first", "", " ", "i cant hide", "overflow"*50, "unga bunga"]
#all_expected = ["some value that is from first key", "what i feel about you", "point blank huh?", "SPACEmarine, got it?", "ganga banga"]
all_errors = ["Key was not found", "Buffer overflow. The key can be no longer than 255 symbols."]

welcome_string = "Hello, please enter the key: "

#if anyone knows how to make this test.py better - feel free to tell me in the comments down below or open an issue.
subprocess.run(["make"])

class TestDictionary(unittest.TestCase):

    def run_program(self, input_data):
        process = subprocess.run(["./program"], 
                                 input=input_data, 
                                 text=True, 
                                 capture_output=True)
        return process.stdout, process.stderr

    def test_first(self):
        input = "first"
        output = "some value that is from first key"
        out, err = self.run_program(input)
        self.assertEqual(out, welcome_string + output + "\n")
        self.assertEqual(err, "")
    
    def test_blank(self):
        input = ""
        output = "point blank huh?"
        out, err = self.run_program(input)
        self.assertEqual(out, welcome_string + output + "\n")
        self.assertEqual(err, "")

    def test_icant(self):
        input = "i cant hide"
        output = "what i feel about you"
        out, err = self.run_program(input)
        self.assertEqual(out, welcome_string + output + "\n")
        self.assertEqual(err, "")


    def test_space(self):
        input = " "
        output = "SPACEmarine, got it?"
        out, err = self.run_program(input)
        self.assertEqual(out, welcome_string + output + "\n")
        self.assertEqual(err, "")


    def test_unga(self):
        input = "ungabunga"
        output = "ganga banga"
        out, err = self.run_program(input)
        self.assertEqual(out, welcome_string + output + "\n")
        self.assertEqual(err, "")


    def test_test(self):
        input = "test"
        output = "test value"
        out, err = self.run_program(input)
        self.assertEqual(out, welcome_string + output + "\n")
        self.assertEqual(err, "")

    def test_overflow(self):
        input = "overflow" * 50
        output = ""
        out, err = self.run_program(input)
        self.assertEqual(out, welcome_string + output + "\n")
        self.assertEqual(err, all_errors[1])

    def test_overflow2(self):
        input = "a"*255
        output = ""
        out, err = self.run_program(input);
        self.assertEqual(out, welcome_string + output + "\n")
        self.assertEqual(err, all_errors[0]);

if __name__ == '__main__':
    unittest.main()
