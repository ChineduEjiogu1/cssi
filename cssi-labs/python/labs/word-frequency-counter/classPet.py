class Pets:
    ''' _inti_() is a method of the class Pet
    .A method is a function that belongs to a class instance.
    All methods of a class first parameter is self'''

    def _init_(self, name,age):
        '''self. name and self.age are instance attributes or data members
        of the class Pet. Instance attributes are unique in every occurrance
        (instance) of a Pet object'''

        self.name = name
        self.age = age
        self.animal = animal
        self.is_hunger = False
        self.mood = "happy"

    count = 0

    '''The pet class has the members age,name,count, _init()_selfself.
    To call the _init_() function we use the class name with the respective
    parameters within parenthesis'''

    def madeHunger(pet):
        pet.is_hunger = True

    #o is an object of Pet
    o = Pet("Dog", 3)

    #o is another object of Pet
    t = Pet("Cat",4)

    print "Before call to makeHunger()"
    print o.name, o.age
    print t.name, t.age
