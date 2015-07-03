describe('doublylinkedlist', function() {
  var doublylinkedlist;

  beforeEach(function() {
    doublylinkedlist = doublyLinkedList();
  });

  it('should have a head and tail.', function() {
    expect(doublylinkedlist).to.have.property("head");
    expect(doublylinkedlist).to.have.property("tail");
  });

  it('should have methods named "addToHead", "addToTail", "removeHead", "removeTail", and "contains"', function() {
    expect(doublylinkedlist.addToHead).to.be.a("function");
    expect(doublylinkedlist.addToTail).to.be.a("function");
    expect(doublylinkedlist.removeHead).to.be.a("function");
    expect(doublylinkedlist.removeTail).to.be.a("function");
    expect(doublylinkedlist.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    doublylinkedlist.addToTail(4);
    expect(doublylinkedlist.tail.value).to.equal(4);
    doublylinkedlist.addToTail(5);
    expect(doublylinkedlist.tail.value).to.equal(5);
  });

  it('should designate a new head when new nodes are added', function(){
    doublylinkedlist.addToHead(4);
    expect(doublylinkedlist.head.value).to.equal(4);
    doublylinkedlist.addToHead(5);
    expect(doublylinkedlist.head.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    doublylinkedlist.addToTail(4);
    doublylinkedlist.addToTail(5);
    expect(doublylinkedlist.head.value).to.equal(4);
    doublylinkedlist.removeHead();
    expect(doublylinkedlist.head.value).to.equal(5);
  });

  it('should remove the tail from the list when removeTail is called', function(){
    doublylinkedlist.addToTail(4);
    doublylinkedlist.addToTail(5);
    expect(doublylinkedlist.tail.value).to.equal(5);
    doublylinkedlist.removeTail();
    expect(doublylinkedlist.tail.value).to.equal(4);
  });

  it("should return the value of the former head when removeHead is called", function(){
    doublylinkedlist.addToTail(4);
    expect(doublylinkedlist.removeHead()).to.equal(4);
  });

  it("should contain a value that was added to the tail", function(){
    doublylinkedlist.addToTail(4);
    doublylinkedlist.addToTail(5);
    expect(doublylinkedlist.contains(4)).to.equal(true);
    expect(doublylinkedlist.contains(5)).to.equal(true);
    expect(doublylinkedlist.contains(6)).to.equal(false);
  });

  it("should contain a value that was added to the head", function(){
    doublylinkedlist.addToHead(4);
    doublylinkedlist.addToHead(5);
    expect(doublylinkedlist.contains(4)).to.equal(true);
    expect(doublylinkedlist.contains(5)).to.equal(true);
    expect(doublylinkedlist.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed from the head', function(){
    doublylinkedlist.addToTail(4);
    doublylinkedlist.addToTail(5);
    doublylinkedlist.removeHead();
    expect(doublylinkedlist.contains(4)).to.equal(false);
  });

  it('should not contain a value that was removed from the tail', function(){
    doublylinkedlist.addToTail(4);
    doublylinkedlist.addToTail(5);
    doublylinkedlist.removeTail();
    expect(doublylinkedlist.contains(5)).to.equal(false);
  });

  // add more tests here to test the functionality of doublylinkedlist
});
